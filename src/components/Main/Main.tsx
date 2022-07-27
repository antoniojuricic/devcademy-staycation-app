import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import PopularLocations from "../PopularLocations/PopularLocations";
import PopularHomes from "../PopularHomes/PopularHomes";
import Footer from "../Footer/Footer";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <PopularLocations />
      <PopularHomes />
      <Footer />
    </div>
  );
};

export default Main;
