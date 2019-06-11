import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import convertTime from '../Helpers/datePipe'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "95%",
    marginBottom: "5px",
    clear: "both"
  },
  face: {
    width: "40px",
    height: "40px",
    borderRadius: "30px"
  },
  float: {
    float: "right"
  }
}));

function PreviewArticle(props) {
  const classes = useStyles();
  const { author, createdAt, title, description, favoritesCount } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<img className={classes.face} src={author.image} />}
        title={author.username}
        subheader={convertTime(createdAt)}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.float}>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon /> {favoritesCount}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PreviewArticle;
