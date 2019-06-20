import React, { useEffect } from "react";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getComment } from "../actions";
import { connect } from "react-redux";
import convertTime from "../Helpers/datePipe";

const styles = () => ({
  footer: {
    padding: "0 25%"
  },
  card: {
    maxWidth: "100%"
  },
  avatar: {
    color: "#000"
  },
  button: {
    color: "#fff",
    backgroundColor: "#9c27b0",
    marginTop: "15px",
    marginBottom: "15px",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#9c27b0"
    }
  }
});
const themes = createMuiTheme({
  palette: {
    primary: { main: "#9c27b0" }
  }
});
function FooterArticle(props) {
  const { classes, getComment, slug, comments, auth } = props;
  useEffect(() => {
    getComment(slug);
  }, [getComment]);
  const renderComment = () => {
    return comments.map(comment => {
      const isauthor = auth.user.user.username === comment.author.username;
      return (
        <Card className={classes.card} key={comment.id}>
          <CardHeader
            avatar={<Avatar alt="" src={comment.author.image} />}
            action={
              isauthor ? (
                <IconButton>
                  <Delete />
                </IconButton>
              ) : (
                ""
              )
            }
            title={comment.author.username}
            subheader={
              <Typography variant="subtitle2" className={classes.avatar}>
                {convertTime(comment.createAt)}
              </Typography>
            }
          />
          <CardContent>
            <Typography component="p">{comment.body}</Typography>
          </CardContent>
        </Card>
      );
    });
  };
  return (
    <div className={classes.footer}>
      <MuiThemeProvider theme={themes}>
        <TextField
          fullWidth={true}
          label="Write a comment..."
          multiline={true}
          rows={7}
        />
      </MuiThemeProvider>
      <div className="button-comment">
        <Button
          variant="contained"
          size="medium"
          classes={{ root: classes.button }}
        >
          Post Comment
        </Button>
      </div>
      {comments.length > 0 && renderComment()}
    </div>
  );
}
function mapStateToProps(state) {
  const { comments, auth } = state;
  return { comments, auth };
}
export default connect(
  mapStateToProps,
  { getComment }
)(withStyles(styles)(FooterArticle));
