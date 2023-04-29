import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Footer.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
  const [t] = useTranslation(["global"]);
  return (
    <div className="footer">
      <nav className="footer_box">
        <Link to="/characters" className="link">
          <h1 className="h1">{t('characters')}</h1>
        </Link>
        <Link to="/houses" className="link">
          <h1>{t('houses')}</h1>
        </Link>
        <Link to="/chronology" className="link">
          <h1>{t('chronology')}</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
