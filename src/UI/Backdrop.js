import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 500px;
  height: ${props => props.commentsVisible ? "905px" : "331px"};
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 500px){
    width: 320px;
    height: ${props => props.commentsVisible ? "880px" : "388px"};
  }
`

const Backdrop = (props) => (
  props.show ? <StyledDiv commentsVisible={props.commentsDisplayed} onClick={props.closeBackdropHandler}/> : null
)

export default Backdrop;