import React from 'react';
import styled from 'styled-components';
import zdjecie from '../../assets/images/hs.png';

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`

const ProfileImage = (props) => (
  <StyledImg src={zdjecie}/>
)

export default ProfileImage;