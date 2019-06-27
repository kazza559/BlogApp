import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const BannerImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 100px;
  display: block
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fe6b8b;
  flex-direction: column;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%
`
export const BannerDiv = styled.div`
  padding: 0 15%
`
const Banner = ({ profile }) => {
  const classes = useStyles();

  return !profile ? <div>Loading...</div> : (
    <BannerDiv>
      <Container>
        <BannerImage alt='' src={profile.image} />
        <h2>{profile.username}</h2>
        <p style={{margin: 0}}>{profile.bio}</p>
        <Right>
          <Button
            variant="outlined"
            size='small'
            color="default"
            aria-label="Add"
            className={classes.margin}
          >
            <AddIcon className={classes.extendedIcon} />
            {profile.following ? `Unfollow ${profile.username}` : `Follow ${profile.username}`}
          </Button>
        </Right>
      </Container>
    </BannerDiv>
  )
}

export default Banner;