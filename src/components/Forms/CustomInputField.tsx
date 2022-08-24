import { TextField } from "@mui/material";

type Props = {
  type: string;
  id: string;
  name: string;
  label: string;
  value: string | number;
  shrink?: boolean;
  multiline?: boolean;
  inputProps?: any;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInputField = (props: Props) => {
  return <TextField {...props} />;
};
