import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getArticle } from "../actions/index";
import convertTime from "../Helpers/datePipe";
import IsAuthorArticle from "./IsAuthorArticle";
import { Chip } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import FooterArticle from "./FooterArticle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(() => ({
  root: {
    padding: "30px 10%",
    boxShadow: "none",
    background: "#333",
    borderRadius: "0px"
  },
  card: {
    background: "#333",
    boxShadow: "none"
  },
  title: {
    color: "#fff",
    padding: "15px 0"
  },
  inforUser: {
    display: "flex",
    marginBottom: "15px",
    alignItems: "center",
    flexWrap: "wrap"
  },
  infor: {
    marginLeft: "10px",
    color: "#fff"
  },
  chip: {
    color: "#fff",
    backgroundColor: "#373a3c",
    margin: "15px 5px",
    height: "20px",
    cursor: "pointer"
  },
  body: {
    padding: "30px 10%"
  },
  linearProgress: {
    height: "1px",
    marginTop: "15px"
  },
  subheader: {
    color: "#fff"
  }
}));
function Article(props) {
  const { article, getArticle, match } = props;
  const classes = useStyles();
  useEffect(() => {
    const slug = match.params.slug;
    getArticle(slug);
  }, [getArticle]);
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
              <IsAuthorArticle {...article} />
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
          <FooterArticle {...article}/>
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
  { getArticle }
)(Article);
