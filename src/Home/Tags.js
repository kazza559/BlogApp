import React, {useState} from "react";
import { connect } from "react-redux";

import { getTagList, getListView } from "../actions/index";
import SmallTag from "../components/SmallTag";

function Tags(props) {
  const { getTagList, getListView, handleSetTag, removeTag } = props;
  const [currentTag, setCurrentTag] = useState(null)
  React.useEffect(() => {
    getTagList();
  }, [getTagList], currentTag);

  const handleClick = (tag) => {
    setCurrentTag(tag);
    getListView(0,10,tag);
    handleSetTag(tag)
  }

  return (
    <div className="sidebar">
      <div className="title-tag">Popular Tags</div>
      <div className="sidebar-tag-list">
        {props.tags.map((el, index) => (
          <SmallTag key={index} clickTag={handleClick} currentTag={currentTag} tag={el} removeTag={removeTag} bg={'#FF8E53'} />
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
