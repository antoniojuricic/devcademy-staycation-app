import styles from "./Login.module.css";
import background from "../../assets/login.png";
import { CustomInputField } from "../Forms/CustomInputField";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, terms: e.target.checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formValues.email !== "" &&
      formValues.password !== "" &&
      formValues.terms
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.window}>
        <div className={styles.cardHeader}>
          <h5 className={styles.title}>Log in</h5>
          <div className={styles.subtitle}>Get started for free</div>
        </div>
        <div className={styles.cardContent}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <CustomInputField
              type="text"
              id="email"
              name="email"
              label="Email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <CustomInputField
              type="password"
              id="password"
              name="password"
              label="Password"
              value={formValues.password}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ padding: "12px" }}
                  value={formValues.terms}
                  onChange={handleCheck}
                  required
                />
              }
              label="I accept the Terms and Conditions"
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                minHeight: "42px",
                width: "100%",
                backgroundColor: "#40E0D0",
              }}
            >
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
