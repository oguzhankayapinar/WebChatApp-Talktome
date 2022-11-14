import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";



function Mobile() {
  return (
    <div> 
    <div className="formContainer"></div>
    <div className='bg-text'> 
    <h1>MOBİL UYGULAMAMIZ ÇOK YAKINDA</h1>
    <p className='mobilnav'><Link to="/Login">Ana Sayfaya Geri Dön</Link></p>
    
    </div>
    <Footer/>
    </div>
  )
}

export default Mobile