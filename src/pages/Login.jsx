import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo1 from '../img/talktome.png'
import tel1 from '../img/tel1.png'
import appgoogle from '../img/appgoogle.png'


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
       <img className='tel' src={tel1} alt=""/>
      <div className="formWrapper">
      <span className="logo"> <img src={logo1} alt=""/></span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
        <Link to="/Mobile"> <img className='appgoogle' src={appgoogle} alt="" />  </Link>
      </div>
    </div>
  );
};

export default Login;
