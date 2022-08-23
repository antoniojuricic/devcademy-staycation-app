import { Grid } from "@mui/material";
import AccommodationCard from "../../components/Cards/AccommodationCard/AccommodationCard";
import AdvancedSearch from "../../components/Forms/AdvancedSearch/AdvancedSearch";
import useAxios from "../../hooks/useAxios";
import styles from "./Favorites.module.css";

export interface AccData {
    id:               string;
    title:            string;
    subtitle:         string;
    description:      string;
    shortDescription: string;
    type:             string;
    categorization:   number;
    personCount:      number;
    imageUrl:         string;
    freeCancelation:  boolean;
    price:            number;
    location:         Location;
    locationID:       string;
    capacity:         number;
}

export interface Location {
    id:         string;
    name:       string;
    imageUrl:   string;
    postalCode: number;
    properties: number;
}


const Favorites = () => {
  const { response, loading, error } = useAxios({
    url: "/Accomodations/recommendation",
    method: "get",
  });
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h4 className={styles.title}>Homes guests love</h4>
        <AdvancedSearch />
      </div>
      <Grid container spacing={3}>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {!loading &&
          !error &&
          response?.data.map((place: AccData) => (
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
      </Grid>
    </div>
  );
};

export default Favorites;
