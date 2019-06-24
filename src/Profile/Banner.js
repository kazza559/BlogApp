import React from 'react';
import styled from 'styled-components'

const BannerImage = styled.img`
  width: 100px;
  margin-top: 150px;
  border-radius: 100px
`
const Banner = ({ profile }) => {
  
  return !profile ? <div>Loading...</div> : (
    <div className="banner" >
      <div className="container" >
        <BannerImage alt='' src={profile.image} />
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        <div className="button-follow">{profile.following}</div>
      </div>
    </div>
  )
}

export default Banner;