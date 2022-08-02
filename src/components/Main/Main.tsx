import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import PopularLocations from "../PopularLocations/PopularLocations";
import PopularHomes from "../PopularHomes/PopularHomes";
import Footer from "../Footer/Footer";
import "./Main.css";
import AccommodationDetails from "../AccommodationDetails/AccommodationDetails";

import accommodationCardImage from "../../assets/split.png";
import cityCardImage from "../../assets/london.png";
import accommodationDetailsImage from "../../assets/mykonos.png";

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

const accommodationDetailsData = {
  title: "Poseidon Hotel Suites",
  subtitle: "Stay in the heart of Mýkonos City",
  description:
    "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",
  type: "Room",
  rating: 5,
  personCount: 2,
  image: accommodationDetailsImage,
  freeCancelation: true,
  price: 500,
  location: "Mýkonos City",
  postalCode: "846 00",
};

const Main = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <PopularLocations cards={cityCardData} />
      <PopularHomes cards={AccommodationCardData} />
      <Footer />

      <AccommodationDetails {...accommodationDetailsData} />
    </div>
  );
};

export default Main;
