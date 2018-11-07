import React from 'react';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import copyIcon from '../../assets/images/copy.svg';

const StyledDiv = styled.div`
  position: absolute;
  left: 26%;
  top: 5%;
  width: 250px;
  height: 100px;

  background: #FFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;

  z-index: 1000;
  @media (max-width: 500px) {left: 11%;}
`
const StyledAdressDiv = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #d7d7d7;
  font-family: Montserrat-SemiBold;
  padding-top: 20px;
  font-size: 14px;
  color: #002C71;

@media (max-width: 500px) {

}

`
const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 10px;

  @media (max-width: 500px) {

  }
`
const ShareMenu = (props) => (
  props.show ?
    <StyledDiv>
      <StyledAdressDiv>{window.location.href}</StyledAdressDiv>
      <CopyToClipboard
        text={window.location.href}>
        <StyledImg
          src={copyIcon}/>
      </CopyToClipboard>

    </StyledDiv>
    : null
)

export default ShareMenu;