import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect } from "react";

const Characters = ({ char }) => {
  const orderCharacters = [...char].sort((a, b) => a.age - b.age);

  useEffect(() => {});

  return (
    <div className="background1">
      <div className="todo">
        <Header></Header>
        <div className="ol">
          <ul className="per">
            {orderCharacters.map((character) => (
              <a className="href" href={`/charactersdetail/${character.id}`}>
                <li className="this" key={character.id}>
                  <img
                    className="img"
                    src={character.image}
                    alt={character.name}
                  />
                  <div>
                    <h4 className="namesage">
                      {character.age} {character.name}
                    </h4>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Characters;
