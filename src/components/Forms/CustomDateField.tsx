import { TextField } from "@mui/material";

type Props = {
  id: string;
  name: string;
  label: string;
  currentValue: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomDateField = (props: Props) => {
  return (
    <TextField
      type="date"
      id={props.id}
      name={props.name}
      label={props.label}
      onChange={props.changeHandler}
      value={props.currentValue}
      InputLabelProps={{ shrink: true }}
    />
  );
};
