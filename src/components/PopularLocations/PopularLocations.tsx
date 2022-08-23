import FeaturedSection from "../FeaturedSection/FeaturedSection";
import CityCard from "../Cards/CityCard/CityCard";
import Grid from "@mui/material/Grid";

import useAxios from "../../hooks/useAxios";

const PopularLocations = () => {
  const { response, loading, error } = useAxios({
    url: "/location",
    method: "get",
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <FeaturedSection
      title="Popular locations"
      callToAction="View all locations"
      slug="locations"
    >
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response &&
        response.data
          .filter((city: any, index: number) => index < 5)
          .map((city: any, index: number) => (
            <Grid item xs={index < 2 ? 6 : 4} key={city.id}>
              <CityCard
                name={city.name}
                count={city.properties}
                image={city.imageUrl}
                id={city.id}
              />
            </Grid>
          ))}
    </FeaturedSection>
  );
};

export default PopularLocations;
