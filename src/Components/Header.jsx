import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ onSearch }) => {
  const location = useLocation("/");

  const [t, i18n] = useTranslation("global");

  return (
    <div className="header">
      {(location.pathname === "/houses" ||
        location.pathname === "/characters") && (
        <div>
          <input style={{ cursor: "pointer" }}
            onKeyUp={(event) => onSearch(event.target.value)}
            className="input"
            type="text"
            placeholder={t('search')}
          ></input>
        </div>
      )}
      {location.pathname.indexOf("/charactersdetail") >= 0 && (
        <Link  style={{ cursor: "pointer" }} to="/characters" className="link">
          <div>
            <p className="back">← {t('back')}</p>
          </div>
        </Link>
      )}
      {location.pathname.indexOf("/housesdetail") >= 0 && (
        <Link style={{ cursor: "pointer" }} to="/houses" className="link">
          <div>
            <p className="back">← {t('back')}</p>
          </div>
        </Link>
      )}
      <div></div>
      <div className="header_box">
        {location.pathname !== "/" && (
          <Link to="/" className="link">
            <img 
              className="logo"
              src="https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png"
              alt=""
            />
          </Link>
        )}
        <button style={{ cursor: "pointer" }}
          onClick={() => i18n.changeLanguage("es")}
          className="button_band"
        >
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
            alt="spanish"
          />
        </button>
        <button style={{ cursor: "pointer" }}
          onClick={() => i18n.changeLanguage("en")}
          className="button_band"
        >
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
            alt="english"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
