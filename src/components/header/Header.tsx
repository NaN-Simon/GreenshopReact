import React from 'react'
import styled from 'styled-components'
import NavBar from '../navigation/NavBar'
import UserNav from '../navigation/UserNav'
import Logo from '../logo/Logo'
import theme from '../../theme/theme';
import useWindowSize from '../../hooks/useWindowSize'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 0.3px solid ${theme.palette.info}7e;
  @media (max-width: ${theme.breakpoints.devices.md}) {
    grid-template-columns: 1fr 1fr;
 }
`
const Header = () => {
  const {isScreenLessThanMd} = useWindowSize();

  return (
    <StyledHeader>
      <Logo />
      {!isScreenLessThanMd && <NavBar />}
      <UserNav />
    </StyledHeader>
  )
}

export default Header