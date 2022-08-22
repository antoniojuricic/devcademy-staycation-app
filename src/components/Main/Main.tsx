import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites/Favorites";
import { Locations } from "../../pages/Locations/Locations";
import Reservation from "../../pages/Reservation/Reservation";
import MyPlaces from "../../pages/MyPlaces/MyPlaces";
import MyBookings from "../../pages/MyBookings";
import AddNewPlace from "../../pages/AddNewPlace/AddNewPlace";
import { AccommodationsByLocation } from "../../pages/AccommodationsByLocation/AccommodationsByLocation";
import AccommodationDetails from "../AccommodationDetails/AccommodationDetails";

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
        <Route path="/add-new-place" element={<AddNewPlace />} />
        <Route path="/location" element={<AccommodationsByLocation />} />
        <Route path="/location/:id" element={<AccommodationsByLocation />} />
        <Route path="/accommodations/:id" element={<AccommodationDetails />} />
        <Route path="/reservation/:id" element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
