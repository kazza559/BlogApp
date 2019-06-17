import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import ButtonCustomer from "../components/ButtonCustomer/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { loginRegister, clearMessege } from "../actions/index";
import TextField from "@material-ui/core/TextField";
import { Style } from "../components/Style/Style";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => Style.styleForm);
const themes = createMuiTheme({
  palette: {
    primary: { main: "#9c27b0" }
  }
});

function EditArticle(props) {
  const { alertErrors, clearMessege } = props;
  const { handleSubmit, register, errors } = useForm();
  const [tag, setTag] = useState([]);
  const [valueTag, setValueTag] = useState("");
  const classes = useStyles();
  React.useEffect(() => {
    clearMessege();
  }, [clearMessege]);
  const onSubmit = user => {
    console.log(user);
  };
  const handleChange = event => {
    setValueTag(event.target.value);
  };
  const keyPressed = event => {
    const value = event.target.value.trim();
    if (event.key === "Enter" && value !== "") {
      setTag([...tag, value]);
      setValueTag("");
    }
  };
  const renderTag = tag.map((tag, index) => (
    <Chip className={classes.chip} label={tag} key={index} size="small" />
  ));

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={themes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyPress={e => {
            if (e.key === "Enter") e.preventDefault();
          }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel error={errors.title ? true : false}>
              Article Title
            </InputLabel>
            <Input
              error={errors.title ? true : false}
              name="title"
              inputRef={register({
                required: "Title is required"
              })}
            />
            {errors.title && (
              <FormHelperText className="component-error-text" error>
                {errors.title.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel error={errors.description ? true : false}>
              What's this article about?
            </InputLabel>
            <Input
              error={errors.description ? true : false}
              name="description"
              inputRef={register({
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description is minLength 10 or more"
                },
                maxLength: {
                  value: 90,
                  message: "Description maxLength is 90"
                }
              })}
            />
            {errors.description && (
              <FormHelperText className="component-error-text" error>
                {errors.description.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.body ? true : false}
              label="Write your article (in markdown)"
              margin="normal"
              multiline={true}
              rows={7}
              name="body"
              inputRef={register({
                required: "Body is required",
                minLength: {
                  value: 8,
                  message: "Body must be a min length 8 or more characters"
                }
              })}
            />

            {errors.body && (
              <FormHelperText className="component-error-text" error>
                {errors.body.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              label="Enter tags"
              margin="normal"
              name="tagList"
              inputRef={register({})}
              value={valueTag}
              onChange={handleChange}
              onKeyPress={keyPressed}
            />

            {tag && renderTag}
          </FormControl>
          {alertErrors.message && (
            <FormHelperText className="component-error-text" error>
              Email or Username has already been taken
            </FormHelperText>
          )}
          <ButtonCustomer text="Publish Article" style={Style.buttonEditor} />
        </form>
      </MuiThemeProvider>
    </div>
  );
}
function mapStateToProps(state) {
  const { alertErrors } = state;
  return { alertErrors };
}
export default connect(
  mapStateToProps,
  { loginRegister, clearMessege }
)(EditArticle);
