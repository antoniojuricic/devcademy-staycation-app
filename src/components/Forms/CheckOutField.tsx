import { InputAdornment, MenuItem, TextField } from "@mui/material";

type Props = {
  checkOutValue: string;
  setCheckOutValue: (newType: string) => void;
};

export const CheckOutField = ({ checkOutValue, setCheckOutValue }: Props) => {
  return (
    <TextField
      type="date"
      id="check-out"
      label="Check Out"
      onChange={(e) => setCheckOutValue(e.target.value)}
      value={checkOutValue}
      InputLabelProps={{ shrink: true }}
    />
  );
};
