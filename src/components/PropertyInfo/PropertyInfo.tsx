import { Link } from "react-router-dom";
import styles from "./PropertyInfo.module.css";

type PropertyInfo = {
  id: string;
  personCount: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
};

const PropertyInfo = (props: PropertyInfo) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.title}>Property info</div>
      <div className={styles.content}>
        <span>{props.personCount} guests</span>
        <span>{props.type}</span>
        <span>EUR {props.price} per night</span>
        <span>{props.location}</span>
        <span>{props.postalCode}</span>
      </div>
      <Link to={"/reservation/" + props.id}><div className={styles.button}>Book your stay</div></Link>
    </div>
  );
};

export default PropertyInfo;
