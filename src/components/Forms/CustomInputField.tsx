import { TextField } from "@mui/material";

type Props = {
  type: string;
  id: string;
  name: string;
  label: string;
  currentValue: string | number;
  shrink?: boolean;
  multiline?: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInputField = (props: Props) => {
  return (
    <TextField
      type={props.type}
      multiline={props.multiline}
      id={props.id}
      name={props.name}
      label={props.label}
      onChange={props.changeHandler}
      value={props.currentValue}
      InputLabelProps={{ shrink: props.shrink }}
    />
  );
};