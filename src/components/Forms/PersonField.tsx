import { InputAdornment, MenuItem, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type Props = {
  currentValue: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PersonField = (props: Props) => {
  return (
    <TextField
      id="people"
      type="number"
      name="people"
      label="How many people?"
      onChange={props.changeHandler}
      value={props.currentValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
