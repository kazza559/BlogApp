import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { getListView } from '../actions'
import PreviewArticle from "../Home/PreviewArticle";
import Pagination from "../components/Pagination";

function MyArticles(props) {
  const { getListView, list, actived, profile } = props;
  useEffect(() => {
      if (profile) {
        getListView(0, 10, null, profile.username)
      }
  }, [getListView, actived, profile]);

  const renderList = list => {
    return list.articles.map(item => (
      <PreviewArticle {...item} key={item.slug} />
    ));
  };

  return !list ? (
    <div>Loading...</div>
  ) : (
    <>
      {renderList(list)}
      {list.articlesCount > 10 && (
        <Pagination {...list} count={list.articlesCount} />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return { list: state.listView };
};
export default connect(
  mapStateToProps,
  { getListView }
)(MyArticles);