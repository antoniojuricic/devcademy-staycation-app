import styles from "./AccommodationCard.module.css";
import starIcon from "../../assets/star.svg";

type AccommodationCard = {
  rating: number;
  image: string;
  title: string;
  location: string;
  price: number;
};

const AccommodationCard = (props: AccommodationCard) => {
  const rating = [];
  for (var i = 0; i < props.rating; i++) {
    rating.push(<img src={starIcon} />);
  }
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.image} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.location}>{props.location}</div>
      <div className={styles.price}>EUR {props.price}</div>
      <div className={styles.rating}>{rating}</div>
    </div>
  );
};

export default AccommodationCard;
