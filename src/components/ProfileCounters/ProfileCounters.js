import React from 'react';
import styled from 'styled-components';

import FollowButton from '../Buttons/FollowButton';

const StyledDivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);

  @media (max-width: 500px){

  }
`

const StyledCounterWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 29px;
`
const StyledNumberP = styled.p`
  font-family: Montserrat-Regular;
  font-size: 24px;
  color: #FFA640;
  letter-spacing: 0;
  padding: 0;
  margin: 0;
`
const StyledIdentifierP = styled.div`
  font-family: Montserrat-Regular;
  font-size: 10px;
  color: #343E00;
  letter-spacing: 0;
  line-height: 29px;
  margin: 0;
  padding: 0;
  vertical-align: top;
`

const ProfileCounters = (props) => (
  <StyledDivWrapper>
    <StyledCounterWrapper>
      <StyledNumberP>{props.likesNumber}</StyledNumberP>
      <StyledIdentifierP>Likes</StyledIdentifierP>
    </StyledCounterWrapper>
    <StyledCounterWrapper>
      <StyledNumberP>{props.followingNumber}</StyledNumberP>
      <StyledIdentifierP>Follwing</StyledIdentifierP>
    </StyledCounterWrapper>
    <StyledCounterWrapper>
      <StyledNumberP>{props.followersNumber}</StyledNumberP>
      <StyledIdentifierP>Followers</StyledIdentifierP>
    </StyledCounterWrapper>

    <FollowButton
      increaseFollowersHandler={props.increaseFollowers}
      buttonStatus={props.followStatus}>
    </FollowButton>
  </StyledDivWrapper>
)

export default ProfileCounters;