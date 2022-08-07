import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import accommodationDetailsImage from "../../assets/mykonos.png";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites/Favorites";
import { Locations } from "../../pages/Locations/Locations";
import Reservation from "../../pages/Reservation/Reservation";
import MyPlaces from "../../pages/MyPlaces";
import MyBookings from "../../pages/MyBookings";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/my-places" element={<MyPlaces />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
