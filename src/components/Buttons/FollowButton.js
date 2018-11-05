import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 134px;
  height: 46px;
  background: #FFA640;
  box-sizing: border-box;
  border-radius: 100px;

  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 4.2px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 500px){
    width: 248px;
  }
`

const FollowButton = (props) => (
  <StyledButton
    onClick={props.increaseFollowersHandler}>
    {props.buttonStatus ? "unfollow" : "follow"}
  </StyledButton>
)

export default FollowButton;