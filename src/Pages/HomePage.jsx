import "../CSS/HomePage.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const HomePage = () => {



  return (
    <div className="background">
      <div className="todo">
        <Header></Header>
        <img
          className="got"
          src="https://www.laps4.com/foro/trofeos/psnjuegos/2500.PNG"
          alt="got"
        />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
