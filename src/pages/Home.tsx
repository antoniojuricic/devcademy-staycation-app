import Header from "../components/Header/Header";
import PopularLocations from "../components/PopularLocations/PopularLocations";
import PopularHomes from "../components/PopularHomes/PopularHomes";
import AccommodationSearch from "../components/Forms/AccommodationSearch/AccommodationSearch";

const Home = () => {
  return (
    <div>
      <Header />
      <AccommodationSearch />
      <PopularLocations />
      <PopularHomes />
    </div>
  );
};

export default Home;
