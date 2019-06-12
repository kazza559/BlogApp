import React from "react";
import { connect } from "react-redux";
import { getTagList, getListView } from "../actions/index";

function Tags(props) {
  const { getTagList, getListView, handleSetTag } = props;
  React.useEffect(() => {
    getTagList();
  }, [getTagList]);

  const handleClick = (tag) => {
    getListView(0,10,tag);
    handleSetTag(tag)
  }
  return (
    <div className="sidebar">
      <div className="title-tag">Popular Tags</div>
      <div className="sidebar-tag-list">
        {props.tags.map((el, index) => (
          <div key={index} onClick={() => handleClick(el)} className="tag">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tags: state.tags
  };
}
export default connect(
  mapStateToProps,
  { getTagList, getListView }
)(Tags);
