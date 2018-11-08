import React from 'react';
import styled from 'styled-components';

const StyledWrapperDiv = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    text-align: center;
  }
`
const StyledNameP = styled.div`
  position: relative;
  font-size: 18px;
  color: #002C71;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  flex-basis: 100%;
  align-self: flex-end;
`
const StyledLocationP = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #8298B9;
  letter-spacing: 0;
  flex-basis: 100%;

  @media (max-width: 500px) {
    padding: 0 0 35px 0;
  }
`

const StyledHearthDiv = styled.div`
  height: 7px;
  width: 7px;
  transform: rotate(-45deg);
  position: absolute;
  right: 55%;
  top: 9px;
  cursor: pointer;
  background-color: ${props => props.clicked ?  "red" : "#D9D9D9"};

  &::before,::after{
    content: "";
    background-color: ${props => props.clicked ? "red"  : "#D9D9D9" };
    border-radius: 50%;
    height: 7px;
    position: absolute;
    width: 7px;
    left: 4px;
  }

  &::before {
  top: -4px;
  left: 0;
  }

  @media (max-width: 500px) {
    right: 19%;
  }
`

const ProfileName = (props) => (
  <StyledWrapperDiv>
    <StyledNameP>
      {props.name}
      <StyledHearthDiv
        clicked={props.likeStatus}
        onClick={props.increaseLikes}/>
    </StyledNameP>
    <StyledLocationP>
      {props.location}
    </StyledLocationP>
  </StyledWrapperDiv>
)

export default ProfileName;