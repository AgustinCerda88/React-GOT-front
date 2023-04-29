import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/Characters.css";


const Houses = ({ house }) => {
  const [pers, setPers] = useState("");


  const onSearch = (value) => {
    setPers(value);
  };

  const filteredChars = house.filter((character) =>
    character.name.toLowerCase().includes(pers.toLowerCase())
  );

  return (
    <div className="background1">
      <div className="todo">
        <Header onSearch={onSearch}></Header>
        <div className="characters">
          {filteredChars.map((houses) => (
            <a className="href" href={`/housesdetail/${houses.id}`}>
              <div className="this">
                <img
                  className="img"
                  src={houses.image}
                  alt={houses.name}
                />
                <h4 className="h3">{houses.name}</h4>
              </div>
            </a>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Houses;
