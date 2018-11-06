import React, { Component } from 'react';
import styled from 'styled-components';

import ProfileImage from '../components/ProfileImage/ProfileImage';

import profilePic from '../assets/images/hs.png';
import ProfileName from '../components/ProfileName/ProfileName';
import ProfileCounters from '../components/ProfileCounters/ProfileCounters';

const StyledWrapperDiv = styled.div`
  width: 466px;
  height: 183px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
  display: inline-block;
  position: absolute;
  top: 36px;
  left: 17px;

  @media (max-width: 500px) {
      width: 284px;
      height: 235px;
  }
`

const StyledProfileDataWrappeDiv = styled.div`
  display: grid;
  grid-template-columns: 110px auto;

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
class Profile extends Component {
  state = {
    likes: 0,
    likeButtonClicked: false,
    following: 732,
    followers: 0,
    followButtonClicked: false,
  }

  increaseLikeHandler = () => {
    const oldCount = this.state.likes;
    const clickStatus = this.state.likeButtonClicked;
    var updatedCount;
    clickStatus ? updatedCount = oldCount - 1 : updatedCount = oldCount + 1;

    this.setState({
      likes: updatedCount,
      likeButtonClicked: !clickStatus
    });
  }

  increaseFollowersHandler = () => {
    const oldCount = this.state.followers;
    const clickStatus = this.state.followButtonClicked;
    var updatedCount;
    clickStatus ? updatedCount = oldCount - 1 : updatedCount = oldCount + 1;

    this.setState({
      followers: updatedCount,
      followButtonClicked: !clickStatus
    });
  }

  render() {
    return (
      <StyledWrapperDiv>
        <StyledProfileDataWrappeDiv>
          <ProfileImage profileImageUrl={profilePic}/>
          <ProfileName
            name="Harvey Specter"
            location="New York, USA"
            increaseLikes={this.increaseLikeHandler}
            likeStatus={this.state.likeButtonClicked}
            />
        </StyledProfileDataWrappeDiv>
        <ProfileCounters
          likesNumber={this.state.likes}
          followingNumber={this.state.following}
          followersNumber={this.state.followers}
          increaseFollowers={this.increaseFollowersHandler}
          followStatus={this.state.followButtonClicked}
          />
      </StyledWrapperDiv>
    )
  }
}

export default Profile;