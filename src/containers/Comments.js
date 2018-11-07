import React, { Component } from 'react';
import styled from 'styled-components';

import HideCommentsButton from '../components/Buttons/HideCommentsButton';
import Comment from '../components/Comment/Comment';
import AddComment from '../components/Comment/AddComment';

import commentsJson from '../assets/json/comments.json';

const StyledWrapperDiv = styled.div`
  width: 466px;
  height: ${props => props.commentsVisible ? "674px" : "100px"};
  transition: height 0.3s ease-out;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
  position: absolute;
  top: 230px;
  display: inline-block;
  left: 17px;

  @media (max-width: 500px) {
    top: 286px;
    width: 284px;
    height: ${props => props.commentsVisible ? "591px" : "100px"};
    transition: height 0.3s ease-out;
  }
`

const StyledLoadingDiv = styled.div`
  color: blue;
  font-size: 15px;
  text-align: center;
`

const CommentsWrapper = styled.div`
  height: 495px;
  overflow: auto;
  visibility: ${props => props.commentsVisible ? "visible" : "hidden"};
  margin-top: 30px;
  @media (max-width: 500px) {
    height: 454px;
  }
`
class Comments extends Component {
  componentDidMount() {
    this.setState({
      comments: commentsJson.comments,
      isLoaded: true,
      commentsNumber: commentsJson.comments.length
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      commentsVisible: this.props.commentsVisible,
      comments: [],
      commentsNumber: 0
    };
  }

  addCommentHandler = (commentValue, commentTime) => {
    var postTime = (commentTime.getHours() + ":" + commentTime.getMinutes())
    const newComment = {
      date: postTime,
      text: commentValue};
    const commentCount = this.state.commentsNumber;
    this.setState({
      comments: [...this.state.comments, newComment],
      commentsNumber: commentCount + 1
    });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter'){
      var commentTime = new Date();
      this.addCommentHandler(e.target.value, commentTime)
      e.target.value = "";
    }
  }

  render() {
    const {isLoaded, comments, commentsNumber} = this.state;

    if (!isLoaded) {
      return (
        <StyledWrapperDiv>
          <StyledLoadingDiv>Loading comments...</StyledLoadingDiv>
        </StyledWrapperDiv>
      )
    } else {
      return (
        <StyledWrapperDiv
          commentsVisible={this.props.commentsVisible}>
          <HideCommentsButton
            commentsVisible={this.props.commentsVisible}
            showCommentsHandler={this.props.collapseCommentsButtonHandler}
            commentsNumber={commentsNumber}
            />
          <CommentsWrapper
            commentsVisible={this.props.commentsVisible}>
          {comments.map(comment =>  <Comment
              name={comment.name}
              commentDate={comment.date}
              commentValue={comment.text}/>)}
          </CommentsWrapper>
          <AddComment
            commentsVisible={this.props.commentsVisible}
            submitCommentHandler={this.onKeyPress}
          />
        </StyledWrapperDiv>

      )
    }
  }
}

export default Comments;