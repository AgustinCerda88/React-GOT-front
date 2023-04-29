import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";

const Characters = ({ char }) => {
  const orderCharacters = [...char].sort((a, b) => a.age - b.age);
  const [sortMinToMax, setSortMinToMax] = useState(true);
  const [isRotated, setIsRotated] = useState(true);

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
      <div className="chronology">
        <Header></Header>
        <div className="chronology__main">
          {char && (
            <div
              onClick={() => {
                sortByNumber(char);
              }}
              className="sort"
            >
              {char[0].age}
            </div>
          )}
          <div className="barra" />
          <img
            className={isRotated ? "arrow rotated" : "arrow"}
            src="/flecha.png"
            alt="flecha"
          />
          {char &&
            char.map((chars, index) => (
              <div
                className={
                  index % 2 === 0
                    ? "chronology__main--item__left"
                    : "chronology__main--item__right"
                }
                key={index}
              >
                <p>{chars.name}</p>
                <p>{chars.age}</p>
                <img
                  src={chars.image}
                  alt={chars.name}
                />
              </div>
            ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Characters;
