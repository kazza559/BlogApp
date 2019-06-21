import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// material-ui components
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
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// material-ui-icons
import Delete from "@material-ui/icons/Delete";

import {
  getComment,
  addComment,
  deleteComment
} from "../actions/comment.action";
import convertTime from "../Helpers/datePipe";
import { Style } from "../components/Style/Style";

const styles = () => Style.footerArticleStyle;
const themes = createMuiTheme(Style.muiThemes);
function FooterArticle(props) {
  const {
    classes,
    getComment,
    slug,
    comments,
    auth,
    addComment,
    deleteComment
  } = props;
  const [initialComment, setinitialComment] = useState("");
  const hanldeChange = event => {
    setinitialComment(event.target.value);
  };
  const postComment = () => {
    if (initialComment.trim().length > 0) {
      const valueComment = { comment: { body: initialComment.trim() } };
      addComment(slug, valueComment);
      setinitialComment("");
    }
  };
  const handleDelete = id => {
    deleteComment(slug, id);
  };
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
                <IconButton
                  onClick={() => {
                    handleDelete(comment.id);
                  }}
                >
                  <Delete />
                </IconButton>
              ) : (
                ""
              )
            }
            title={comment.author.username}
            subheader={
              <Typography variant="subtitle2" className={classes.avatar}>
                {convertTime(comment.createdAt)}
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
          value={initialComment}
          onChange={hanldeChange}
        />
      </MuiThemeProvider>
      <div className="button-comment">
        <Button
          variant="contained"
          size="medium"
          classes={{ root: classes.button }}
          onClick={postComment}
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
  { getComment, addComment, deleteComment }
)(withStyles(styles)(FooterArticle));
