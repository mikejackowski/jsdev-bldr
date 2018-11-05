import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 500px;
  height: 95px;
  background: #002C71;
  border-radius: 5px 5px 0 0;
  position: relative;

  @media (max-width: 500px) {
      width: 320px;
  }
`

const Header = (props) => (
  <StyledDiv>
    {props.children}
  </StyledDiv>
)

export default Header;