import { InputAdornment, MenuItem, TextField } from "@mui/material";
import KingBedIcon from "@mui/icons-material/KingBed";

type Props = {
  locationValue: string;
  setLocationValue: (newType: string) => void;
};

export const LocationField = ({ locationValue, setLocationValue }: Props) => {
  return (
    <TextField
      id="location"
      select
      label="Where are you going?"
      onChange={(e) => setLocationValue?.(e.target.value)}
      value={locationValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <KingBedIcon />
          </InputAdornment>
        ),
      }}
      style={{ width: 200 }}
    >
      <MenuItem value="london">London</MenuItem>
      <MenuItem value="split">Split</MenuItem>
    </TextField>
  );
};
