import React from "react";
import { connect } from "react-redux";

// material-ui components
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

// material-ui-icons
import AddCircle from "@material-ui/icons/AddCircle";
import Favorite from "@material-ui/icons/Favorite";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { Style } from "../components/Style/Style";


const styles = () => Style.authorStyle;

function IsAuthorArticle(props) {
  const { classes, favoritesCount, author, auth } = props;
  const handleFollow = () => {
    console.table("article");
  };
  const handleFavorite = () => {
    console.log("hello");
  };
  return (
    <span className="isArthorArticle">
      {auth.user.user.username !== author.username && (
        <span>
          <Chip
            avatar={
              <Avatar>
                <AddCircle />
              </Avatar>
            }
            classes={{
              root: classes.roots,
              avatar: classes.avatar,
              label: classes.label
            }}
            label={`${!author.following ? "Follow" : "UnFollow"} ${
              author.username
            }`}
            onClick={handleFollow}
          />
          <Chip
            avatar={
              <Avatar>
                <Favorite />
              </Avatar>
            }
            classes={{
              root: classes.roots,
              avatar: classes.avatar,
              label: classes.label
            }}
            label={`${
              !author.favorited ? "Favorite" : "UnFavorite"
            } Article (${favoritesCount})`}
            onClick={handleFavorite}
          />
        </span>
      )}
      {auth.user.user.username === author.username && (
        <span>
          <Chip
            avatar={
              <Avatar>
                <Edit />
              </Avatar>
            }
            classes={{
              root: classes.roots,
              avatar: classes.avatar,
              label: classes.label
            }}
            label="Edit Article"
          />
          <Chip
            avatar={
              <Avatar>
                <Delete />
              </Avatar>
            }
            classes={{
              root: classes.roots,
              avatar: classes.avatar,
              label: classes.label
            }}
            label="Delete Article"
          />
        </span>
      )}
    </span>
  );
}
function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}
export default connect(mapStateToProps)(withStyles(styles)(IsAuthorArticle));
