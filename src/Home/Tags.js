import React from "react";
import { connect } from "react-redux";
import { getTagList } from "../actions/index";

function Tags(props) {
  const { getTagList } = props;
  React.useEffect(() => {
    getTagList();
  }, [getTagList]);

  return (
    <div className="sidebar">
      <div className="title-tag">Popular Tags</div>
      <div className="sidebar-tag-list">
        {props.tags.map((el, index) => (
          <div key={index} className="tag">
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
  { getTagList }
)(Tags);
