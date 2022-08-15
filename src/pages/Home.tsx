import Header from "../components/Header/Header";
import PopularLocations from "../components/PopularLocations/PopularLocations";
import PopularHomes from "../components/PopularHomes/PopularHomes";
import AccommodationSearch from "../components/Forms/AccommodationSearch/AccommodationSearch";
import { cityCardData } from "../data/cityCardData";
import { accommodationCardData } from "../data/accommodationCardData";

const Home = () => {
  return (
    <div>
      <Header />
      <AccommodationSearch />
      <PopularLocations cards={cityCardData} />
      <PopularHomes cards={accommodationCardData} />
    </div>
  );
};

export default Home;
