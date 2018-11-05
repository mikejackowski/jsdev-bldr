import React from 'react';
import styled from 'styled-components';

const StyledWrapperDiv = styled.div`
`
const StyledNameP = styled.div`
  position: relative;
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #002C71;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
`
const StyledLocationP = styled.p`
  margin: 0;
  padding: 0;
  font-family: Montserrat-Regular;
  font-size: 12px;
  color: #8298B9;
  letter-spacing: 0;
`

const StyledHearthDiv = styled.div`
  height: 7px;
  width: 7px;
  transform: rotate(-45deg);
  position: absolute;
  right: 34%;
  top: 10px;
  cursor: pointer;
  background-color: ${props => props.clicked ?  "red" : "grey"};

  &::before,::after{
    content: "";
    background-color: ${props => props.clicked ? "red"  : "grey" };
    border-radius: 50%;
    height: 7px;
    position: absolute;
    width: 7px;
  }

  &::before {
  top: -4px;
  left: 0;
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