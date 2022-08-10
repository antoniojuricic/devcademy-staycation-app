import FeaturedSection from "../FeaturedSection/FeaturedSection";
import CityCard from "../Cards/CityCard/CityCard";
import Grid from "@mui/material/Grid";

const PopularLocations = ({ cards }: { cards: CityCard[] }) => {
  return (
    <FeaturedSection
      title="Popular locations"
      callToAction="View all locations"
      slug="favorites"
    >
      {cards.map((city) => (
        <Grid item xs={4}>
          <CityCard name={city.name} count={city.count} image={city.image} />
        </Grid>
      ))}
    </FeaturedSection>
  );
};

export default PopularLocations;
