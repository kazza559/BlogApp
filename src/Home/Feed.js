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
    return feed.articles.map(item => (
      <PreviewArticle key={item.slug} {...item} />
    ));
  };
  return !feed.articles.length ? (
    <div>No articles here...yet</div>
  ) : (
    <>
      {renderList()}
      {feed.articlesCount > 10 && (
        <Pagination feed="feed" count={feed.articlesCount} />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return { feed: state.listView };
};

export default connect(
  mapStateToProps,
  { getFeed }
)(Feed);
