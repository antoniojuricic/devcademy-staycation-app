import { Grid } from "@mui/material";
import CityCard from "../../components/Cards/CityCard/CityCard";
import SimpleSearch from "../../components/Forms/SimpleSearch";
import useAxios from "../../hooks/useAxios";
import styles from "./Locations.module.css";

export const Locations = () => {
  const { response, loading, error } = useAxios({
    url: "/location",
    method: "get",
  });
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>All locations</h4>
      <SimpleSearch />
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {!loading &&
          !error &&
          response?.data.map((city: any, index: number) => (
            <Grid item xs={3} key={city.id}>
              <CityCard
                name={city.name}
                count={city.properties}
                image={city.imageUrl}
                id={city.id}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
