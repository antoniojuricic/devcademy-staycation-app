import FeaturedSection from "../FeaturedSection/FeaturedSection";
import AccommodationCard from "../Cards/AccommodationCard/AccommodationCard";
import Grid from "@mui/material/Grid";

const PopularHomes = ({ cards }: { cards: AccommodationCard[] }) => {
  return (
    <FeaturedSection title="Homes guests love" callToAction="View all homes" slug="favorites">
      {cards.map((place) => (
        <Grid item xs={3}>
          <AccommodationCard
            title={place.title}
            location={place.location}
            image={place.image}
            rating={place.rating}
            price={place.price}
          />
        </Grid>
      ))}
    </FeaturedSection>
  );
};

export default PopularHomes;
