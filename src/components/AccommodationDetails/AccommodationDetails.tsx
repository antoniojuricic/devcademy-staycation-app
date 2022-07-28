import Categorization from "../Categorization";
import PropertyInfo from "../PropertyInfo/PropertyInfo";
import calendar from "../../assets/calendar.svg";
import styles from "./AccommodationDetails.module.css";

type AccommodationDetails = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  personCount: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
};

const AccommodationDetails = (props: AccommodationDetails) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} />
      <div className={styles.content}>
        <div className={styles.inline}>
          <div className={styles.title}>{props.title}</div>
          <Categorization rating={props.rating} />
        </div>
        <div className={styles.subtitle}>{props.subtitle}</div>
        <div className={styles.cancellationPlaceholder}>
          <img src={calendar} />
          Free cancellation available
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <PropertyInfo
        personCount={props.personCount}
        type={props.type}
        price={props.price}
        location={props.location}
        postalCode={props.postalCode}
      />
    </div>
  );
};

export default AccommodationDetails;
