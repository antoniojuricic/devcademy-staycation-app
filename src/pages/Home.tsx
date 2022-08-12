import Header from "../components/Header/Header";
import PopularLocations from "../components/PopularLocations/PopularLocations";
import PopularHomes from "../components/PopularHomes/PopularHomes";
import AccommodationSearch from "../components/Forms/AccommodationSearch/AccommodationSearch";
import { cityCardData } from "../data/CityCardData";
import { AccommodationCardData } from "../data/AccommodationCardData";

const Home = () => {
  return (
    <div>
      <Header />
      <AccommodationSearch />
      <PopularLocations cards={cityCardData} />
      <PopularHomes cards={AccommodationCardData} />
    </div>
  );
};

export default Home;
