import React, { Component } from 'react';
import styled from 'styled-components';
import { compareDesc } from 'date-fns';
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
  height: 479px;
  overflow: auto;
  visibility: ${props => props.commentsVisible ? "visible" : "hidden"};
  margin-top: 30px;
  @media (max-width: 500px) {
    height: 440px;
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
    const newComment = {
      date: commentTime,
      text: commentValue,
      id: this.state.commentsNumber + 1};
    const commentCount = this.state.commentsNumber;
    this.setState({
      comments: [...this.state.comments, newComment],
      commentsNumber: commentCount + 1
    });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter'){
      var commentTime = new Date().toISOString();
      this.addCommentHandler(e.target.value, commentTime)
      e.target.value = "";
    }
  }
  sortCommentsByDate = (date1, date2) => {
      var dateObj_1 = new Date(date1.props.commentDate).getTime();
      var dateObj_2 = new Date(date2.props.commentDate).getTime();
      if (dateObj_1 > dateObj_2) {return 1};
      if (dateObj_2 > dateObj_1) {return -1};
    return 0;
  }
  DisplayComments = () => {
    const commentsList = this.state.comments;
    const comments = commentsList.map(comment =>
      <Comment
        key={comment.id}
        name={comment.name}
        commentDate={comment.date}
        commentValue={comment.text}/>).sort(this.sortCommentsByDate);
    return comments;
  }

  render() {
    const {isLoaded, commentsNumber} = this.state;

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
          <this.DisplayComments/>
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