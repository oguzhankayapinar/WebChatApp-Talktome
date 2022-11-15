import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import logo1 from '../img/talktome.png'
import Footer from "../components/Footer";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              isOnline:true,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo"> <img src={logo1} alt=""/></span>
        <span className="title">Üye Kaydı</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Kullanıcı Adı" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Şifre" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Profil Fotoğrafı Ekle</span>
          </label>
          <button disabled={loading}>Üye Ol</button>
          {loading && "SOHBET SAYFASINA YÖNLENDİRİLİYORSUNUZ"}
          {err && <span>Bir şeyler ters gitti!</span>}
        </form>
        <p>
          Bir hesabınız var mı? <Link to="/Login">Giriş Yap</Link>
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
