import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/CharactersDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Characters = ({ char }) => {
  const location = useLocation("/");
  const { id } = useParams();
  const [detailChar, setDetailChar] = useState([]);
  const [t] = useTranslation(["global"]);


  const getCharDetail = () => {
    axios.get("https://react-got-back.vercel.app/characters/" + id).then((res) => {
      axios
        .get("https://react-got-back.vercel.app/houses?name_like=" + res.data.house)
        .then((resp) => {
          res.data.house = resp.data[0];
          setDetailChar(res.data);
        });
    });
  };

  useEffect(() => {
    getCharDetail([]);
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
                src={detailChar.image}
                alt={detailChar.name}
              />
            </div>
            <h1 className="name">{detailChar.name}</h1>
          </div>
          <div className="titulos">
            <div className="li">
              <h2 className="h2">{t('house')}</h2>
              {detailChar.house && detailChar.house.image && (
                <img
                  className="casa"
                  src={detailChar.house.image}
                  alt={detailChar.name}
                />
              )}
            </div>
            <div className="li">
              <h2 className="h2">{t('alliances')}</h2>
              <div className="scroll">
                <ul className="ul">
                  {detailChar.alliances &&
                    detailChar.alliances.map((eld) => (
                      <li className="lili">{eld}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="li">
              <h2 className="h2">{t('episodes')}</h2>
              <div className="scroll">
                <ul className="ul">
                  {detailChar.episodes &&
                    detailChar.episodes.map((ele) => (
                      <li className="lili">{ele}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="li">
              <h2 className="h2">{t('parents')}</h2>
              <div className="scroll">
                <ul className="ul">
                  {detailChar.parents &&
                    detailChar.parents.map((ela) => (
                      <li className="lili">{ela}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="li">
              <h2 className="h2">{t('siblings')}</h2>
              <div className="scroll">
                <ul className="ul">
                  {detailChar.siblings &&
                    detailChar.siblings.map((elb) => (
                      <li className="lili">{elb}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="li">
              <h2 className="h2">{t('titles')}</h2>
              <div className="scroll">
                <ul className="ul">
                  {detailChar.titles &&
                    detailChar.titles.map((elc) => (
                      <li className="lili">{elc}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {location.pathname === "/charactersdetail" && <Footer></Footer>}
      </div>
    </div>
  );
};

export default Characters;
