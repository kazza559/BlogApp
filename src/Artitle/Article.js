import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// material-ui components
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";

import { getArticle, clearArticle } from "../actions/index";
import convertTime from "../Helpers/datePipe";
import IsAuthorArticle from "./IsAuthorArticle";
import FooterArticle from "./FooterArticle";
import { Style } from "../components/Style/Style";

const useStyles = makeStyles(() => Style.articlePageStyle);
function Article(props) {
  const { article, getArticle, match, clearArticle } = props;
  const classes = useStyles();
  useEffect(() => {
    const slug = match.params.slug;
    clearArticle();
    getArticle(slug);
  }, [getArticle, clearArticle,match.params.slug]);
  return (
    <div className="article-page">
      {Object.keys(article).length !== 0 && (
        <div className="article">
          <div className={classes.root}>
            <Typography
              variant="h3"
              color="textPrimary"
              component="p"
              className={classes.title}
            >
              {article.title}
            </Typography>
            <div className={classes.inforUser}>
              <Card className={classes.card}>
                <CardHeader
                  classes={{title:classes.title}}
                  avatar={<Avatar alt="" src={article.author.image} />}
                  title={<Link to="/">{article.author.username}</Link>}
                  subheader={
                    <Typography
                      variant="subtitle2"
                      className={classes.subheader}
                    >
                      {convertTime(article.createAt)}
                    </Typography>
                  }
                />
              </Card>
              <IsAuthorArticle />
            </div>
          </div>
          <div className={classes.body}>
            <Typography variant="h5">{article.body}</Typography>
            {article.tagList.map((tag, index) => (
              <Chip label={tag} className={classes.chip} key={index} />
            ))}
            <LinearProgress
              color="secondary"
              variant="determinate"
              className={classes.linearProgress}
              value={100}
            />
          </div>
          <FooterArticle />
        </div>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  const { article } = state;
  return { article };
}
export default connect(
  mapStateToProps,
  { getArticle, clearArticle }
)(Article);
