import { Button } from "@mui/material";

const SearchButton = () => {
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
      SEARCH
    </Button>
  );
};

export default SearchButton;
