import { useLocation, Navigate } from "react-router-dom";
import styles from "./AccommodationsByLocation.module.css";

interface CustomState {
  location: string;
}

export const AccommodationsByLocation = () => {
  const location = useLocation();
  const state = location.state as CustomState;

  if (location.state === null || state.location == "") {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Stays in {state.location}</h4>
    </div>
  );
};
