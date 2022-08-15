import { useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import styles from "./CategorizationInput.module.css";

type Props = {
  rating: number;
  clickHandler: (event: React.MouseEvent<HTMLElement>, rating: number) => void;
};

export const CategorizationInput = (props: Props) => {
  const [inputValue, setInputValue] = useState({
    hover: 0,
  });

  return (
    <div className={styles.categorizationInput}>
      <div className={styles.title}>Categorization</div>
      <div className={styles.starRating}>
        {[...Array(5)].map((star, index) => {
          return (
            <button
              type="button"
              name="categorization"
              key={index}
              className={
                ++index <= (inputValue.hover || props.rating)
                  ? styles.on
                  : styles.off
              }
              onClick={(e) => props.clickHandler(e, index)}
              onMouseEnter={() =>
                setInputValue({ ...inputValue, hover: index })
              }
              onMouseLeave={() =>
                setInputValue({ ...inputValue, hover: props.rating })
              }
            >
              <div className={styles.star}>
                {index <= (inputValue.hover || props.rating) ? (
                  <StarIcon sx={{ fontSize: "20px" }} />
                ) : (
                  <StarOutlineIcon sx={{ fontSize: "20px" }} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
