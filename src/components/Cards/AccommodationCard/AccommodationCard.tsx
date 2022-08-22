import styles from "./AccommodationCard.module.css";
import Categorization from "../../Categorization";
import { Link } from "react-router-dom";

type AccommodationCard = {
  id: string;
  rating: number;
  image: string;
  title: string;
  location: string;
  price: number;
};

const AccommodationCard = (props: AccommodationCard) => {
  return (
    <Link to={"/accommodations/" + props.id}>
      <div className={styles.card}>
        <img className={styles.image} src={props.image} />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.location}>{props.location}</div>
        <div className={styles.price}>EUR {props.price}</div>
        <Categorization rating={props.rating} />
      </div>
    </Link>
  );
};

export default AccommodationCard;
