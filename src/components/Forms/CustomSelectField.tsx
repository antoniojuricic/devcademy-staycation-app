import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  selectOptions: { name: string; value: string }[];
  icon?: ReactNode;
  currentValue: string;
  style?: React.CSSProperties;
  shrink?: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomSelectField = (props: Props) => {
  return (
    <TextField
      id={props.id}
      select
      label={props.label}
      onChange={props.changeHandler}
      name={props.name}
      value={props.currentValue}
      InputProps={{
        startAdornment: props.icon && (
          <InputAdornment position="start">{props.icon}</InputAdornment>
        ),
      }}
      style={props.style}
    >
      {props.selectOptions.map((option) => (
        <MenuItem key={option.name} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
};
