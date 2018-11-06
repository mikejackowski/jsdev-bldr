import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 134px;
  height: 46px;
  background: #FFA640;
  box-sizing: border-box;
  border-radius: 100px;
  outline: none;
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 4.2px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 500px){
    width: 248px;
    grid-area: 4, 4, 4;
    grid-column: span 3;
    place-self: center;
  }
`

const FollowButton = (props) => (
  <StyledButton
    onClick={props.increaseFollowersHandler}>
    {props.buttonStatus ? "unfollow" : "follow"}
  </StyledButton>
)

export default FollowButton;