import React from 'react'
import styled from 'styled-components'
import NavBar from '../navigation/NavBar'
import UserNav from '../navigation/UserNav'
import Logo from '../logo/Logo'
import theme from '../../theme/theme';
import useWindowSize from '../../hooks/useWindowSize'
import { useLocation } from 'react-router-dom'
import LogoName from '../logo/LogoName'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 0.3px solid ${theme.palette.info}7e;
  padding: 0 20px;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    grid-template-columns: 1fr 1.1fr 1fr;
    max-width: 1200px;
    padding: 0;
 }
`

const StyledLogoName = styled.div`
  @media (max-width: ${theme.breakpoints.devices.sm}) {
    display: none
 }
`
const Header = () => {
  const { isScreenLessThanMd } = useWindowSize();

  const props = useLocation();

  return (
    <StyledHeader>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '5px' }}>
        <Logo />
        <StyledLogoName>
          <LogoName name='GREENSHOP' />
        </StyledLogoName>
      </div>
      {!isScreenLessThanMd && <NavBar activePage={props.pathname} />}
      <UserNav />
    </StyledHeader>
  )
}

export default Header