import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ButtonCustomer from "../components/ButtonCustomer/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { logIn } from "../actions/index";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "0 30%"
  },
  formControl: {
    width: "100%",
    margin: "20px 0"
  }
}));

function Login(props) {
  const { logIn } = props;
  const { handleSubmit, register, errors } = useForm();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();
  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);
  const onSubmit =  user => {
    const inforUser = { user };
    logIn(inforUser);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tittle">Sign in</div>
        <div className="to-register">Need an account?</div>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={labelRef}
            htmlFor="component-outlined"
            error={errors.email ? true : false}
          >
            Enter your email
          </InputLabel>
          <OutlinedInput
            error={errors.email ? true : false}
            labelWidth={labelWidth}
            name="email"
            inputRef={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email address is invalid"
              }
            })}
          />
          {errors.email && (
            <FormHelperText id="component-error-text" error>
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={labelRef}
            htmlFor="component-outlined"
            error={errors.password ? true : false}
          >
            Enter your Password
          </InputLabel>
          <OutlinedInput
            error={errors.password ? true : false}
            labelWidth={labelWidth}
            type="password"
            name="password"
            inputRef={register({
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be a min length 8 or more characters"
              }
            })}
          />
          {errors.password && (
            <FormHelperText id="component-error-text" error>
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        <ButtonCustomer text="Sign in" />
      </form>
    </div>
  );
}

export default connect(
  null,
  { logIn }
)(Login);
