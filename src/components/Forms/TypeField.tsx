import { InputAdornment, MenuItem, TextField } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";

type Props = {
  typeValue: string;
  setTypeValue: (newType: string) => void;
};

export const TypeField = ({ typeValue, setTypeValue }: Props) => {
  return (
    <TextField
      id="type"
      select
      label="What type of accommodation?"
      onChange={(e) => setTypeValue(e.target.value)}
      value={typeValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HotelIcon />
          </InputAdornment>
        ),
      }}
      style={{ width: 200 }}
    >
      <MenuItem value="room">Room</MenuItem>
      <MenuItem value="apartment">Apartment</MenuItem>
    </TextField>
  );
};
