import styles from "./CityCard.module.css";

type CityCard = { name: string; count: number; image: string; id: string };

const CityCard = (props: CityCard) => {
  const image = props.image;
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.card}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <div className={`${styles.text} ${styles.title}`}>{props.name}</div>
          <div className={`${styles.text} ${styles.propertyCount}`}>
            {props.count} properties
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
