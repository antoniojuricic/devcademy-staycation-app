import { Button } from "@mui/material";
import React from "react";

type Props = {
  text: string;
};

export const MediumButton = (props: Props) => {
  let text = props.text.toUpperCase();
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        background: "#40e0d0",
        color: "#ffffff",
        width: "9.25rem",
        height: "100%",
      }}
    >
      {text}
    </Button>
  );
};
