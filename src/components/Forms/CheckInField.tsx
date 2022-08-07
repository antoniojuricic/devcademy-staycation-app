import { InputAdornment, MenuItem, TextField } from "@mui/material";

type Props = {
  checkInValue: string;
  setCheckInValue: (newType: string) => void;
};

export const CheckInField = ({ checkInValue, setCheckInValue }: Props) => {
  return (
    <TextField
      type="date"
      id="check-in"
      label="Check in"
      onChange={(e) => setCheckInValue(e.target.value)}
      value={checkInValue}
      InputLabelProps={{ shrink: true }}
    />
  );
};
