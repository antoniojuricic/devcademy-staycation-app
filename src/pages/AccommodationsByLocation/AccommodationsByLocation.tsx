import { Grid } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";
import AccommodationCard from "../../components/Cards/AccommodationCard/AccommodationCard";
import useAxios from "../../hooks/useAxios";
import styles from "./AccommodationsByLocation.module.css";

interface CustomState {
  location: any;
  formData: any;
}

export const AccommodationsByLocation = () => {
  const { response, loading, error } = useAxios({
    url: "/Accomodations",
    method: "get",
  });

  const { response: reservationsResp } = useAxios({
    url: "/Reservation",
    method: "get",
  });

  const location = useLocation();
  const state = location.state as CustomState;

  if (location.state === null || state.location == "") {
    return <Navigate to="/" />;
  }

  if (state.formData) {
    var conflictingReservations = reservationsResp?.data.find((obj: any) => {
      let resCheckIn = new Date(obj.checkIn);
      let resCheckOut = new Date(obj.checkOut);
      let formCheckIn = new Date(state.formData.checkIn);
      let formCheckOut = new Date(state.formData.checkOut);

      return (
        (resCheckIn < formCheckIn && resCheckOut > formCheckOut) ||
        (resCheckOut > formCheckIn && resCheckOut < formCheckOut) ||
        (resCheckIn > formCheckIn && resCheckIn < formCheckOut)
      );
    });
  }
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Stays in {state?.location.value}</h4>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <Grid container spacing={3}>
        {!loading &&
          !error &&
          response?.data
            .filter((place: any, index: number) =>
              state.formData == undefined
                ? place.locationID == state?.location.name
                : place.locationID == state?.location.name &&
                  place.capacity >= state?.formData.people &&
                  place.type == state?.formData.type &&
                  conflictingReservations.filter(
                    (e: any) => e.accomodationId === place.id
                  ).length == 0
            )
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
      </Grid>
    </div>
  );
};
