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
import { createArticle, clearMessege } from "../actions/index";
import TextField from "@material-ui/core/TextField";
import { Style } from "../components/Style/Style";
import ChipInput from "material-ui-chip-input";

const useStyles = makeStyles(theme => Style.styleForm);
const themes = createMuiTheme({
  palette: {
    primary: { main: "#9c27b0" }
  }
});

function EditArticle(props) {
  const { alertErrors, clearMessege , createArticle} = props;
  const { handleSubmit, register, errors } = useForm();
  const [tagList, setTagList] = useState([]);
  const classes = useStyles();
  React.useEffect(() => {
    clearMessege();
  }, [clearMessege]);
  const onSubmit = valueForm => {
    const newArticle = { article: { ...valueForm, tagList } };
    createArticle(newArticle);
  };
  const handleChange = chip => {
    setTagList([...tagList, chip]);
  };
  const handleDeleteChip = chip => {
    setTagList(tagList.filter(c => c !== chip));
  };

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
            <ChipInput
              label ="Add a tag"
              value={tagList}
              onAdd={chip => handleChange(chip)}
              onDelete={chip => handleDeleteChip(chip)}
              classes={{
                chip: classes.chip
              }}
            />
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
  { createArticle, clearMessege }
)(EditArticle);
