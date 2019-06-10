import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ButtonCustomer from "../components/ButtonCustomer/Button";
import useForm from "./userForm";
import validate from "./LoginFormValidationRules";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "0 30%"
  },
  formControl: {
    width: "100%",
    margin: "20px 0"
  }
}));

function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    loginForm,
    validate
  );
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);
  function loginForm() {
    console.log("No errors, submit callback called!");
  }
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="tittle">Sign in</div>
        <div className="to-register">Need an account?</div>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Enter your email
          </InputLabel>
          <OutlinedInput
            value={values.email || ""}
            onChange={handleChange}
            labelWidth={labelWidth}
            type="email"
            name="email"
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined">
            Enter your Password
          </InputLabel>
          <OutlinedInput
            value={values.password || ""}
            onChange={handleChange}
            labelWidth={labelWidth}
            type="password"
            name="password"
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </FormControl>
        <ButtonCustomer text="Sign in" />
      </form>
    </div>
  );
}

export default Login;
