import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderWrapper from '../components/Header/HeaderWrapper';
import Profile from '../containers/Profile';
import Comments from '../containers/Comments';
import ShareMenu from '../components/ShareMenu/ShareMenu';
import Backdrop from './Backdrop';


const StyledLayoutWrapper = styled.div`
  width: 100%;
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
  position: relative;

  @media (max-width: 500px) {
    width: 320px;
    height: ${props => props.commentsVisible ? "813px" : "386px"};
  }
`
class Layout extends Component {

  state = {
    commentsVisible: true,
    displayShareMenu: false
  }

  collapseCommentsButtonHandler = () => {
    const showingComments = this.state.commentsVisible;
    this.setState({
      commentsVisible: !showingComments
    })
  }

  shareMenuHandler = () => {
    var shareDisplayed = this.state.displayShareMenu;
    this.setState({
      displayShareMenu: !shareDisplayed
    });
  }
  render() {
    return (
      <StyledLayoutWrapper>
        <StyledLayout
          commentsVisible={this.state.commentsVisible}>
          <Backdrop
            show={this.state.displayShareMenu}
            commentsDisplayed={this.state.commentsVisible}
            closeBackdropHandler={this.shareMenuHandler}/>
        <ShareMenu
          show={this.state.displayShareMenu}/>
          <HeaderWrapper>
            <Profile
              shareMenuHandler={this.shareMenuHandler}/>
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