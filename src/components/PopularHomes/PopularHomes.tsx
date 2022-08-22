import FeaturedSection from "../FeaturedSection/FeaturedSection";
import AccommodationCard from "../Cards/AccommodationCard/AccommodationCard";
import Grid from "@mui/material/Grid";
import useAxios from "../../hooks/useAxios";

const PopularHomes = () => {
  const { response, loading, error } = useAxios({
    url: "/Accomodations/recommendation",
    method: "get",
  });

  return (
    <FeaturedSection
      title="Homes guests love"
      callToAction="View all homes"
      slug="favorites"
    >
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response?.data
          .filter((place: any, index: number) => index < 4)
          .map((place: any) => (
            <Grid item xs={3} key={place.id}>
              <AccommodationCard
                id={place.id}
                title={place.title}
                location={place.location?.name}
                image={place.imageUrl}
                rating={place.categorization}
                price={place.price}
              />
            </Grid>
          ))}
    </FeaturedSection>
  );
};

export default PopularHomes;
