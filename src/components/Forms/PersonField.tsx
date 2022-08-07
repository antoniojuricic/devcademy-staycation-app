import { InputAdornment, MenuItem, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type Props = {
  personValue: string;
  setPersonValue: (newType: string) => void;
};

export const PersonField = ({ personValue, setPersonValue }: Props) => {
  return (
    <TextField
      id="people"
      type="number"
      label="How many people?"
      onChange={(e) => setPersonValue(e.target.value)}
      value={personValue}
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
