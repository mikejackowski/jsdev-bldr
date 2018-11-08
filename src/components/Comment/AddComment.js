import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 413px;
  padding: 42px 0 5px 0;
  border: none;
  border-bottom: 2px solid #DBE0E8;
  text-align: left;
  justify-content: center;
  margin: 0 auto;
  font-size: 18px;
  color: #8298B9;
  letter-spacing: 0;
  outline: none;
  visibility: ${props => props.commentsVisible ? "visible" : "hidden"};

  @media (max-width: 500px){
    width: 222.2px;
    padding-top: 14.5px;
  }
`

const AddComment = (props) => (
  <StyledInput
    commentsVisible={props.commentsVisible}
    type="text"
    placeholder="Add a comment"
    onKeyPress={props.submitCommentHandler}
    />
)

export default AddComment;