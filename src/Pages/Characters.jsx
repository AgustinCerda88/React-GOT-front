import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/Characters.css";

const Characters = ({ char }) => {

  const [showName, setShowName] = useState(null);
  const [pers, setPers] = useState("");

  const onSearch = (value) => {
    setPers(value);
  };

  
  const filteredChars = char.filter((character) =>
    character.name.toLowerCase().includes(pers.toLowerCase())
    );

    const mouseOver = (charac) => {
      setShowName(charac)
    }

    const mouseLeave = () => {
      setShowName(null)
    }


  return (
    <div className="background1">
      <div className="todo">
        <Header onSearch={onSearch}></Header>
        <div className="characters">
          {filteredChars.map((character) => (
            <a className="href" href={`/charactersdetail/${character.id}`}>
              <div className="this" key={character.id} onMouseEnter={() => mouseOver (character)} onMouseLeave={() => mouseLeave(character)}>
                  <img
                    className="img"
                    src={character.image}
                    alt={character.name}
                  />
                  {showName === character && (<h4 className="h3">{character.name}</h4>)}
                </div>
            </a>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Characters;
