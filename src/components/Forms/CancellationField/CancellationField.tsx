import { Switch } from "@mui/material";
import styles from "./CancellationField.module.css";

type Props = {
  name: string;
  value: boolean;
  defaultChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CancellationField = (props: Props) => {
  return (
    <div className={styles.cancellationField}>
      <div className={styles.title}>Free cancellation available</div>
      <div className={styles.switch}>
        <Switch {...props} />
      </div>
    </div>
  );
};
