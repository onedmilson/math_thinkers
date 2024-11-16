import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About'
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import PreTest from './components/PreTest/PreTest';
import Account from './components/Account/Account';



function App() {
  return (
    <>
    
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/pre-test' element={<PreTest />} />
    <Route path='/account' element={<Account />} />
    </Routes>
    </div>
    
    </>
  );
}

export default App;


