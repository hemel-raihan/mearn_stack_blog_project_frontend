import "./register.css"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post('https://node-blog-projects-api.herokuapp.com/api/auth/register',{
        username, email, password
      })
      res.data && navigate('/login');
    }
    catch(err){
      setError(true)
    }
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input className="registerInput" onChange={e=>setUsername(e.target.value)} type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" onChange={e=>setEmail(e.target.value)} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button type="submit" className="registerLoginButton">
        <Link to="/login" className="link" >Login</Link>
        </button>
        {error && <span style={{color: 'red', marginTop: '10px'}}>Something went wrong!!</span>}
    </div>
    )
}