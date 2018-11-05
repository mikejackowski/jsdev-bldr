import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Profile from '../containers/Profile';


const StyledLayoutWrapper = styled.div`
  width: 1000px;
  background: white;
  text-align: center;
`
const StyledLayout = styled.div`
  display: inline-block;
  width: 500px;
  height: 797px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 320px;
    height: 813px;
  }
`
const Layout = () => (
  <StyledLayoutWrapper>
    <StyledLayout>
      <Header>
        <Profile/>
      </Header>

    </StyledLayout>
  </StyledLayoutWrapper>
)

export default Layout