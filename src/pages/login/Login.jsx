import "./login.css";
import { Link } from 'react-router-dom';
import { useContext, useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onChange={handleSubmit} className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton">Login</button>
      </form>
        <button type="submit" className="loginRegisterButton">
          <Link to="/register" className="link" >Register</Link>
        </button>
    </div>
  );
}