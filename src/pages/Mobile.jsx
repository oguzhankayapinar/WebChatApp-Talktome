import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";




function Mobile() {
  const { t } = useTranslation();

  return (
    <div> 
     
    <div className="formContainer"></div>
   
    <div className='bg-text'> 
    <h1>{t("mobile")}</h1>
    <p className='mobilnav'><Link to="/Login">{t("pagehome")}</Link></p>
    
    </div>
    <Footer/>
    </div>
  )
}

export default Mobile