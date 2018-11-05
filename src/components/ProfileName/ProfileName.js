import React from 'react';
import styled from 'styled-components';

const StyledWrapperDiv = styled.div`
`
const StyledNameP = styled.p`
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

const ProfileName = (props) => (
  <StyledWrapperDiv>
    <StyledNameP>
      {props.name}
    </StyledNameP>
    <StyledLocationP>
      {props.location}
    </StyledLocationP>
  </StyledWrapperDiv>
)

export default ProfileName;