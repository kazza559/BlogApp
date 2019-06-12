import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../actions';
import PreviewArticle from './PreviewArticle'

function Feed(props) {
  const {getFeed, feed} = props;
  useEffect(() => {
    getFeed();
  }, [getFeed,feed])

  const renderList = () => {
    return feed.map(item => <PreviewArticle {...item} />)
  }
  return (
    !feed.length ? <div>No articles here...yet</div> : renderList()
  )
}

const mapStateToProps = state => {
  return {feed: state.feed}
}

export default connect(mapStateToProps, {getFeed})(Feed);