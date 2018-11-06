import React from 'react';
import styled from 'styled-components';
import zdjecie from '../../assets/images/hs.png';

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  padding: 20px;

  @media (max-width: 500px) {
    padding: 0 0 16px 0;
    place-self: center;
    margin-top: -48px;
  }
`

const ProfileImage = (props) => (
  <StyledImg src={zdjecie}/>
)

export default ProfileImage;