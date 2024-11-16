const express = require('express');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// signup
app.post('/signup', async (req, res) => {
  const { user, email, password } = req.body;

  if (!user || !email || !password) {
    return res.status(400).json({ detail: 'User, email, and password are required!' });
  }

  try {
    // Verifique se o email já existe no banco de dados
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      return res.status(400).json({ detail: 'Email already exists!' });
    }

    // Gerar hash da senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Inserir usuário
    await pool.query(
      `INSERT INTO users (name, email, hashed_password) VALUES($1, $2, $3)`,
      [user, email, hashedPassword]
    );

    // Gerar o token JWT
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

    res.json({ email, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ detail: 'Server error, please try again later' });
  }
});

// login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ detail: 'Email and password are required!' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ detail: 'User does not exist!' });
    }

    const user = result.rows[0];
    const success = await bcrypt.compare(password, user.hashed_password);

    if (!success) {
      return res.status(400).json({ detail: 'Invalid password!' });
    }

    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

    res.json({ email: user.email, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ detail: 'Server error, please try again later' });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
