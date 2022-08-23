import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  selectOptions?: { name: string; value: string }[];
  icon?: ReactNode;
  value: string;
  style?: React.CSSProperties;
  shrink?: boolean;
  error?: boolean;
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomSelectField = (props: Props) => {
  return (
    <TextField
      id={props.id}
      select
      label={props.label}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        startAdornment: props.icon && (
          <InputAdornment position="start">{props.icon}</InputAdornment>
        ),
      }}
      style={props.style}
    >
      {props.selectOptions?.map((option) => (
        <MenuItem key={option.name} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
};
