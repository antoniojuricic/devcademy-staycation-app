import styles from "./AccommodationCard.module.css";
import Categorization from "../Categorization";

type AccommodationCard = {
  rating: number;
  image: string;
  title: string;
  location: string;
  price: number;
};

const AccommodationCard = (props: AccommodationCard) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.image} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.location}>{props.location}</div>
      <div className={styles.price}>EUR {props.price}</div>
      <Categorization rating={props.rating} />
    </div>
  );
};

export default AccommodationCard;
