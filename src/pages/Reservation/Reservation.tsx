import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";
import ReservationForm from "../../components/Forms/ReservationForm";
import styles from "./Reservation.module.css";
import ReservationImage from "../../assets/mykonos.png";

const ReservationData = {
  title: "Poseidon Hotel Suites",
  type: "Room",
  rating: 5,
  image: ReservationImage,
  price: 500,
  location: "Mýkonos City",
  postalCode: "846 00",
};

const Reservation = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Book your stay</h4>
      <div className={styles.content}>
        <div className={styles.form}>
          <ReservationForm />
        </div>
        <div className={styles.card}>
          <ReservationCard
            title={ReservationData.title}
            type={ReservationData.type}
            rating={ReservationData.rating}
            image={ReservationData.image}
            price={ReservationData.price}
            location={ReservationData.location}
            postalCode={ReservationData.postalCode}
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
