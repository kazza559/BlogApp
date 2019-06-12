import React from "react";
import { connect } from "react-redux";
import PreviewArticle from "./PreviewArticle";
import Pagination from "../components/Pagination";

function TagListPreview(props) {
  const renderList = () => {
    return props.list.map(item => <PreviewArticle key={item.slug} {...item} />);
  };
  return !props.list ? (
    <div>Loading...</div>
  ) : (
    <>
      {renderList()}
      <Pagination tag={props.tag} {...props.list} />
    </>
  );
}

const mapStateToProps = state => {
  return { list: state.listView };
};
export default connect(
  mapStateToProps,
  null
)(TagListPreview);
