import React from "react";
import Headers from "../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ButtonCustomer from "../components/ButtonCustomer/Button";

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
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className={classes.container}>
      <Headers />
      <div className="tittle">Sign in</div>
      <div className="to-register">Need an account?</div>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined" >
          Enter your email
        </InputLabel>
        <OutlinedInput
          value={email}
          onChange={handleChangeEmail}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
          Enter your Password
        </InputLabel>
        <OutlinedInput
          value={password}
          onChange={handleChangePassword}
          labelWidth={labelWidth}
          type="password"
        />
      </FormControl>
      <ButtonCustomer text="Sign in" />
    </div>
  );
}

export default Login;
