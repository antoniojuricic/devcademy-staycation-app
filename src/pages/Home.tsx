import Header from "../components/Header/Header";
import PopularLocations from "../components/PopularLocations/PopularLocations";
import PopularHomes from "../components/PopularHomes/PopularHomes";
import accommodationCardImage from "./../assets/split.png";
import cityCardImage from "./../assets/london.png";
import AccommodationSearch from "../components/Forms/AccommodationSearch/AccommodationSearch";

const AccommodationCardData = [
    {
      title: "Sugar & Spice Apartments",
      location: "Split",
      price: 75,
      rating: 3,
      image: accommodationCardImage,
    },
  ];
  
  const cityCardData = [
    {
      name: "London",
      count: 5102,
      image: cityCardImage,
    },
  ];

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
