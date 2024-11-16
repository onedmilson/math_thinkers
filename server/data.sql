-- CREATE DATABASE maththinkers;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Armazena a data de criação
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Armazena a data de última atualização
);


-- Tabela de categorias
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- Tabela de exercícios
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabela de perguntas
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    image_url VARCHAR(255), -- Caminho opcional para a imagem da pergunta
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de respostas dos usuários
CREATE TABLE user_answers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    question_id INT REFERENCES questions(id) ON DELETE CASCADE,
    selected_answer VARCHAR(255),
    is_correct BOOLEAN,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de estatísticas dos usuários
CREATE TABLE user_statistics (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    correct_answers INT DEFAULT 0,
    total_answers INT DEFAULT 0,
    PRIMARY KEY (user_id, category_id)
);

-- Inserção de dados na tabela de categorias
INSERT INTO categories (name, description) VALUES 
('Sequências', 'Questões sobre sequências numéricas e lógicas'),
('Conjuntos', 'Questões sobre teoria de conjuntos e operações'),
('Probabilidade', 'Questões sobre cálculo de probabilidade'),
('Estatística', 'Questões sobre estatística e análise de dados');
-- Tabela de usuários
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Data da última atualização
);

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;  -- Atualiza updated_at com o timestamp atual
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para a tabela users
CREATE TRIGGER update_user_timestamp
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

-- Tabela de categorias
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- Tabela de exercícios
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabela de perguntas
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    image_url VARCHAR(255), -- Caminho opcional para a imagem da pergunta
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de respostas dos usuários
CREATE TABLE user_answers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    question_id INT REFERENCES questions(id) ON DELETE CASCADE,
    selected_answer VARCHAR(255),
    is_correct BOOLEAN,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de estatísticas dos usuários
CREATE TABLE user_statistics (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    correct_answers INT DEFAULT 0,
    total_answers INT DEFAULT 0,
    PRIMARY KEY (user_id, category_id)
);

-- Inserção de dados na tabela de categorias
INSERT INTO categories (name, description) VALUES 
('Sequências', 'Questões sobre sequências numéricas e lógicas'),
('Conjuntos', 'Questões sobre teoria de conjuntos e operações'),
('Probabilidade', 'Questões sobre cálculo de probabilidade'),
('Estatística', 'Questões sobre estatística e análise de dados');
