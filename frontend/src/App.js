import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Singup from './components/Singup';
import {Route,Routes, useLocation} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import {Admin} from './components/Admin';
import { useEffect,useState } from 'react';
function App() {
  const [auth, setAuth] = useState('')
  const location=useLocation()
  const token = localStorage.getItem("token");
  useEffect(() => {
    setAuth(token)
  }, [location])

  return (
    <div className="App">
      <Navbar/>
    {auth ?  <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>:  <Routes>
        <Route path="/register" element={<Singup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
      
      </Routes>}
    </div>
  );
}

export default App;
