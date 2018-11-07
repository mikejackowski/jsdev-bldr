import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderWrapper from '../components/Header/HeaderWrapper';
import Profile from '../containers/Profile';
import Comments from '../containers/Comments';


const StyledLayoutWrapper = styled.div`
  width: 1000px;
  background: white;
  text-align: center;
`
const StyledLayout = styled.div`
  display: inline-block;
  width: 500px;
  height: ${props => props.commentsVisible ? "797px" : "330px"};
  transition: height 0.3s ease-out;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 320px;
    height: ${props => props.commentsVisible ? "813px" : "386px"};
  }
`
class Layout extends Component {

  state = {
    commentsVisible: true
  }

  collapseCommentsButtonHandler = () => {
    const showingComments = this.state.commentsVisible;
    this.setState({
      commentsVisible: !showingComments
    })
  }
  render() {
    return (
      <StyledLayoutWrapper>
        <StyledLayout
          commentsVisible={this.state.commentsVisible}>
          <HeaderWrapper>
            <Profile/>
            <Comments
              commentsVisible={this.state.commentsVisible}
              collapseCommentsButtonHandler={this.collapseCommentsButtonHandler}/>
          </HeaderWrapper>
        </StyledLayout>
      </StyledLayoutWrapper>
    )
  }
}

export default Layout