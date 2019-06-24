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
import {
  favoriteArticle,
  unFavoriteArticle,
  followArticle,
  unFollowArticle
} from "../actions/favoriteFollow.action";

const styles = () => Style.authorStyle;

function IsAuthorArticle(props) {
  const {
    classes,
    article,
    auth,
    favoriteArticle,
    unFavoriteArticle,
    unFollowArticle,
    followArticle
  } = props;
  const {
    author: { username, following },
    favorited,
    favoritesCount,
    slug
  } = article;
  const handleFollow = () => {
    following ? unFollowArticle(username) : followArticle(username);
  };
  const handleFavorite = () => {
    !favorited ? favoriteArticle(slug) : unFavoriteArticle(slug);
  };
  return (
    <span className="isArthorArticle">
      {auth.user.user.username !== username && (
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
            label={`${!following ? "Follow" : "UnFollow"} ${username}`}
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
              !favorited ? "Favorite" : "UnFavorite"
            } Article (${favoritesCount})`}
            onClick={handleFavorite}
          />
        </span>
      )}
      {auth.user.user.username === username && (
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
  const { auth, article } = state;
  return { auth, article };
}
export default connect(
  mapStateToProps,
  { favoriteArticle, unFavoriteArticle, followArticle, unFollowArticle }
)(withStyles(styles)(IsAuthorArticle));
