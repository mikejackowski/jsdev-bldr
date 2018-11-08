import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  color: #FFA640;
  letter-spacing: 0;
  margin: ${props => props.commentsVisible ? "25px 0 0 0" : "42px 0 0 0"};
  text-decoration: underline;
  border: none;
  background: transparent;
  padding: 0;
`
const HideCommentsButton = (props) => (
  <StyledButton
    onClick={props.showCommentsHandler}>
      {props.commentsVisible ? "Hide comments" : "Show comments"} ({props.commentsNumber})
  </StyledButton>
)

export default HideCommentsButton;