import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions'
import Banner from './Banner';
import ListArticle from './ListArticle'
const Profile = ({ match, getProfile, profile }) => {

  useEffect(() => {
    if (match.params.user) {
      getProfile(match.params.user)
    }
  },[getProfile, match.params.user] )
  return (
    <>
      <Banner { ...profile } />
      <ListArticle />
    </>
  )
}

const mapStateToProps = state => {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { getProfile })(Profile)