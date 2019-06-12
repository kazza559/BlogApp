import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../actions';

function Feed(props) {
  const {getFeed, feed} = props;
  useEffect(() => {
    getFeed();
  }, [getFeed])
  return (
    <div>No articles here...yet</div>
  )
}

const mapStateToProps = state => {
  return {feed: state.feed}
}

export default connect(mapStateToProps, {getFeed})(Feed);