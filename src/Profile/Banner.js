import React from 'react'

const Banner = ({profile}) => {
  
  return !profile ? <div>Loading...</div> : (
    <div className="banner" >
      <div className="container" >
        <div className="banner-image"> <img src={profile.image} /> </div>
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        <div className="button-follow">{profile.following}</div>
      </div>
    </div>
  )
}

export default Banner;