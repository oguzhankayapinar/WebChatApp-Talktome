import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo1 from '../img/talktome.png'
import tel1 from '../img/tel1.png'
import appgoogle from '../img/appgoogle.png'
import screen from '../img/screen.png'
import Footer from "../components/Footer";



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
      <div  className="teldiv">  <img className='tel' src={tel1} alt=""/>
      <div><img className='screen' src={screen} alt=""/> </div>
      </div>
      <div className="formWrapper">
      <span className="logo"> <img src={logo1} alt=""/></span>
        <span className="title">Giriş</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Şifre" />
          <button>Giriş Yap</button>
          {err && <span>Bir şeyler ters gitti</span>}
        </form>
        <p>Henüz bir hesabınız yok mu? <Link to="/register">Kayıt Ol</Link></p>
        <Link to="/Mobile"> <img className='appgoogle' src={appgoogle} alt="" />  </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
