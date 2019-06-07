import React from "react";
import { connect } from "react-redux";
import { getTagList } from "../actions/index";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTagList();
  }
  render() {
    return (
      <div className="sidebar">
        <div className="title-tag">Popular Tags</div>
        <div className="sidebar-tag-list">
          {this.props.tags.map((el, index) => (
            <div key={index} className="tag">
              {el}
            </div>
          ))}
        </div>
      </div>
    );
  }
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
