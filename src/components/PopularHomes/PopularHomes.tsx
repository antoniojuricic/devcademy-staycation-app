import FeaturedSection from "../FeaturedSection/FeaturedSection";
import AccommodationCard from "../AccommodationCard/AccommodationCard";
import Grid from "@mui/material/Grid";
import image from "../../assets/split.png";

const AccommodationCardData = [
  {
    title: "Sugar & Spice Apartments",
    location: "Split",
    price: 75,
    categorization: 3,
    image: image,
  },
];

const PopularHomes = () => {
  return (
    <FeaturedSection title="Homes guests love" callToAction="View all homes">
        
      {AccommodationCardData.map((place) => (
        <Grid item xs={3}>
          <AccommodationCard
            title={place.title}
            location={place.location}
            image={place.image}
            rating={place.categorization}
            price={place.price}
          />
        </Grid>
      ))}
    </FeaturedSection>
  );
};

export default PopularHomes;
