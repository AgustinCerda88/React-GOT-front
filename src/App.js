import "./App.css";
import HomePage from "./Pages/HomePage";
import Characters from "./Pages/Characters";
import CharacDetails from "./Components/CharacDetails";
import Houses from "./Pages/Houses";
import HousesDetail from "./Components/HousesDetail";
import Chronology from "./Pages/Chronology";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [char, setChar] = useState([]);
  const [house, setHouse] = useState([]);

  const getChar = () => {
    axios.get("https://react-got-back.vercel.app/characters").then(res => {
      setChar(res.data);
    });
  };

  const getHouses = () => {
    axios.get("https://react-got-back.vercel.app/houses").then(res => {
      setHouse(res.data);
    });
  };

  useEffect(() => {
    getChar();
    getHouses();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters char={char} />} />
        <Route path="/charactersdetail/:id" element={<CharacDetails char={char} />} />
        <Route path="/houses" element={<Houses house={house} />} />
        <Route path="/housesdetail/:id" element={<HousesDetail house={house}/>} />
        <Route path="/chronology" element={<Chronology char={char}/>} />
      </Routes>
    </Router>
  );
};

export default App;
