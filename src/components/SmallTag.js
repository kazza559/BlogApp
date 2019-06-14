import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  core: {
    display: 'inline-block',
    padding: '.1rem .6em',
    borderRadius: '10rem',
    backgroundColor: props => props.bg,
    opacity: '0.8',
    marginRight: '3px',
    marginBottom: '3px',
    color: 'white',
    cursor: 'pointer'
  },
  active: {
    textDecoration: 'underline',
    opacity: '1'
  }
}));

function SmallTag(props) {
  const classes = useStyles(props);
  const handleClick = () => {
    props.clickTag(props.tag);
  }
  const style = props.currentTag === props.tag ? `${classes.core} ${classes.active}` : `${classes.core}`
  return (
    <span onClick={handleClick} className={style}>{props.tag}</span>
  )
}

export default SmallTag;