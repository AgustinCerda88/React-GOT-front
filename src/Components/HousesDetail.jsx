import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/CharactersDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Characters = () => {
  const location = useLocation("/");
  const { id } = useParams();
  const [detailHouse, setDetailHouse] = useState([]);
  const [t] = useTranslation(["global"]);

  const getHouseDetail = () => {
    axios.get("https://react-got-back.vercel.app/houses/" + id).then((res) => {
      setDetailHouse(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getHouseDetail();
  }, []);

  return (
    <div className="background1">
      <div className="todo">
        <Header></Header>
        <div className="characters2">
          <div className="all">
            <div className="imgcov">
              <img
                className="imges"
                src={detailHouse.image}
                alt={detailHouse.name}
              />
            </div>
            <h2 className="name">{detailHouse.name}</h2>
          </div>
          <div className="titulos">
            <div className="li">
              <h4>{t('settlement')}</h4> {detailHouse.settlement}
            </div>
            <div className="li">
              <h4>{t('region')}</h4> {detailHouse.region}
            </div>
            <div className="li">
              <h4>{t('alliances')}</h4>
              <ul>
                {detailHouse.alliances &&
                  detailHouse.alliances.map((el) => (
                    <li className="lili">{el}</li>
                  ))}
              </ul>
            </div>
            <div className="li">
              <h4>{t('religions')}</h4>
              <ul>
                {detailHouse.religions &&
                  detailHouse.religions.map((el) => (
                    <li className="lili">{el}</li>
                  ))}
              </ul>
            </div>
            <div className="li">
              <h4>{t('foundation')}</h4> {detailHouse.foundation}
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/charactersdetail" && <Footer></Footer>}
    </div>
  );
};

export default Characters;
