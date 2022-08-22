import { Button } from "@mui/material";
import styles from "./MyPlaceCard.module.css";

type MyPlaceCard = {
  id: string;
  image: string;
  title: string;
  location: string;
  handleEdit: (event: React.MouseEvent<HTMLElement>, id: string) => void;
  handleDelete: (event: React.MouseEvent<HTMLElement>, id: string) => void;
};

export const MyPlaceCard = (props: MyPlaceCard) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.image} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.location}>{props.location}</div>
      <div className={styles.buttons}>
        <Button variant="text" onClick={(e) => props.handleEdit(e, props.id)}>
          EDIT
        </Button>
        <Button
          variant="text"
          onClick={(e) => props.handleDelete(e, props.id)}
          color="error"
        >
          DELETE PLACE
        </Button>
      </div>
    </div>
  );
};
