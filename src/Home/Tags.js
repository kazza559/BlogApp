import React, {useState} from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { getTagList, getListView } from "../actions/index";
import SmallTag from "../components/SmallTag";

const useStyles = makeStyles(() => ({
  active: {
    textDecoration: 'underline',
    opacity: '1'
  }
}));

function Tags(props) {
  const classes = useStyles();
  const { getTagList, getListView, handleSetTag } = props;
  const [currentTag, setCurrentTag] = useState(null)
  React.useEffect(() => {
    getTagList();
  }, [getTagList], currentTag);

  const handleClick = (tag, index) => {
    setCurrentTag(tag);
    
    getListView(0,10,tag);
    handleSetTag(tag)
    console.log(currentTag)
  }

  return (
    <div className="sidebar">
      <div className="title-tag">Popular Tags</div>
      <div className="sidebar-tag-list">
        {props.tags.map((el, index) => (
          <SmallTag key={index} clickTag={handleClick} currentTag={currentTag} tag={el} bg={'#FF8E53'} />
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
