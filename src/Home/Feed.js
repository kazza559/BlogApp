import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFeed } from "../actions";
import PreviewArticle from "./PreviewArticle";
import Pagination from "../components/Pagination";

function Feed(props) {
  const { getFeed, feed } = props;
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const renderList = () => {
    return feed.map(item => <PreviewArticle key={item.slug} {...item} />);
  };
  return !feed.length ? (
    <div>No articles here...yet</div>
  ) : (
    <>
      {renderList()}
      <Pagination feed="feed" />
    </>
  );
}

const mapStateToProps = state => {
  return { feed: state.feed };
};

export default connect(
  mapStateToProps,
  { getFeed }
)(Feed);
