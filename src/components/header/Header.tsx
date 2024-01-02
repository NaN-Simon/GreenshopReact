import React from 'react'
import styled from 'styled-components'
import NavBar from '../navigation/NavBar'
import UserNav from '../navigation/UserNav'
import Logo from '../logo/Logo'
import theme from '../../theme/theme';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 53px;
  border-bottom: 0.3px solid ${theme.palette.info}7e;
`
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <UserNav />
    </StyledHeader>
  )
}

export default Header