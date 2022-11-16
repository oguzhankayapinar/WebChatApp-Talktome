import React from "react";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <p>{t("sosmes")}</p>
            <div className="footer-icons"> 
                <a href="https://github.com/oguzhankayapinar">
                <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/oguzhankayapinar/">
                <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <div className="langbut"> 
            <LanguageButton/>
            </div>
        </div>
    )
}

export default Footer;