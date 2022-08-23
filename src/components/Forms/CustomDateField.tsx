import { TextField } from "@mui/material";

type Props = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomDateField = (props: Props) => {
  return (
    <TextField
      type="date"
      id={props.id}
      name={props.name}
      label={props.label}
      onChange={props.onChange}
      value={props.value}
      InputLabelProps={{ shrink: true }}
    />
  );
};
