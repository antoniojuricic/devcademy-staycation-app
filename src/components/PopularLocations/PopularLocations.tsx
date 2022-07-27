import FeaturedSection from "../FeaturedSection/FeaturedSection";
import CityCard from "../CityCard/CityCard";
import Grid from "@mui/material/Grid";
import image from "../../assets/london.png";

const cityCardData = [
  {
    name: "London",
    count: 5102,
    image: image,
  },
];

const PopularLocations = () => {
  return (
    <FeaturedSection title="Popular locations" callToAction="View all locations">
        
        {cityCardData.map((city) => (
            <Grid item xs={4}>
              <CityCard name={city.name} count={city.count} image={city.image} />
            </Grid>
          ))}
    </FeaturedSection>

  );
};

export default PopularLocations;
