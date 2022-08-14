import { Switch } from "@mui/material";
import styles from "./CancellationField.module.css";

type Props = {
  name: string;
  currentValue: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CancellationField = (props: Props) => {
  return (
    <div className={styles.cancellationField}>
      <div className={styles.title}>Free cancellation available</div>
      <div className={styles.switch}>
        <Switch
          onChange={props.changeHandler}
          value={props.currentValue}
          name={props.name}
        />
      </div>
    </div>
  );
};
