import Categorization from "../../Categorization";
import styles from "./ReservationCard.module.css";

type Props = {
  image: string;
  title: string;
  rating: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
};

const ReservationCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} />
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.rating}>
          <Categorization rating={props.rating} />
        </div>
        <div className={styles.details}>
          {props.type}
          <br />
          {props.location}
          <br />
          {props.postalCode}
          <br />
          EUR {props.price} per night
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
