import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Chronology.css";
import { useTranslation } from "react-i18next";

const Characters = () => {
  const [characters, setCharacters] = useState();
  let [sortMinToMax, setSortMinToMax] = useState(true);
  let [isRotated, setIsRotated] = useState(true);
  const [t] = useTranslation("global");

  useEffect(() => {
    axios.get("https://react-got-back.vercel.app/characters").then((res) => {
      const sortedCharacters = sortByNumber(res.data);
      setCharacters(sortedCharacters);
    });
  }, []);

  const sortByNumber = (array) => {
    if (sortMinToMax) {
      array.sort((a, b) => a.age - b.age);
      setSortMinToMax(false);
    } else {
      array.sort((a, b) => b.age - a.age);
      setSortMinToMax(true);
    }
    setIsRotated(!isRotated);
    return array;
  };

  return (
    <div className="background1">
      <div className="todo">
        <Header></Header>
        <h2 className="age">{t('sort by age')}</h2>
        <div className="chronology__main">
          {characters && (
            <div className="sort">
              {characters[0].age ? characters[0].age : 0}
            </div>
          )}
          <img style={{ cursor: "pointer" }}
            onClick={() => {
              sortByNumber(characters);
            }}
            className={isRotated ? "arrow rotated" : "arrow"}
            src="https://www.freeiconspng.com/thumbs/white-arrow-png/curved-white-arrow-png-0.png"
            alt="flecha"
          />
          {characters &&
            characters.map((pers, index) => (
              <div
                className={
                  index % 2 === 0
                    ? "chronology__main--item__left"
                    : "chronology__main--item__right"
                }
                key={index}
              >
                <p className="p">{pers.name}</p>
                <p className="p">{pers.age}</p>
                <a className="href" href={`/charactersdetail/${pers.id}`}>
                  <img className="pers" src={pers.image} alt={pers.name} />
                </a>
              </div>
            ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Characters;
