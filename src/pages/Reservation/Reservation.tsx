import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";
import ReservationForm from "../../components/Forms/ReservationForm";
import styles from "./Reservation.module.css";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const Reservation = () => {
  let { id } = useParams();

  const { response, error } = useAxios({
    url: "/Accomodations/" + id,
    method: "get",
  });

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Book your stay</h4>
      {error && "There was an error"}
      {response && (
        <div className={styles.content}>
          <div className={styles.form}>
            <ReservationForm data={response?.data} />
          </div>
          <div className={styles.card}>
            <ReservationCard
              title={response?.data.title}
              type={response?.data.type}
              rating={response?.data.categorization}
              image={response?.data.imageUrl}
              price={response?.data.price}
              location={response?.data.location.name}
              postalCode={response?.data.location.postalCode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
