import React from "react";
import {connect} from 'react-redux';
import {favoriteArticle, unfavoriteArticle} from '../actions'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import convertTime from '../Helpers/datePipe';
import Chip from '@material-ui/core/Chip';
import { Style } from './../components/Style/Style';


const useStyles = makeStyles(theme => Style.Preview)

function PreviewArticle(props) {
  const classes = useStyles();
  const { author, createdAt, title, description, favoritesCount, tagList, isAuth, favorited, slug } = props;

  const renderTag = () => {
    return tagList.map((tag, index) => <Chip className={classes.chip} label={tag} key={index} size="small"
    />)
  }
  const handleFavorite = () => {
    if (!isAuth) {
      return;
    }
    favorited ? props.unfavoriteArticle(slug) : props.favoriteArticle(slug)
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<img className={classes.face} src={author.image} alt="" />}
        title={author.username}
        subheader={convertTime(createdAt)}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {title}
        </Typography>
        <Typography className={classes.mgb10} variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
        {tagList && renderTag()}
      </CardContent>
      <CardActions className={classes.float}>
        <IconButton onClick={handleFavorite} aria-label="Add to favorites">
          <FavoriteIcon /> {favoritesCount}
        </IconButton>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return {isAuth: state.auth}
}

export default connect(mapStateToProps, {favoriteArticle, unfavoriteArticle})(PreviewArticle);
