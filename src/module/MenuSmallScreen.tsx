import React from 'react'
import styled from 'styled-components'
import CategoryFilter from './CategoryFilter'
import NavBar from '../components/navigation/NavBar'
import theme from '../theme/theme';

const StyledMenuSmallScreen = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  outline: 2px solid #fbfbfb;
  box-shadow: 8px 0px 20px 0px rgb(0 0 0 / 40%);
  background: ${theme.palette.backgroundSecondary};
  overflow-y: auto;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`
const MenuSmallScreen = () => {
  return (
    <StyledMenuSmallScreen data-name='menu-small-screen'>
      <NavBar isVertical />
      <CategoryFilter style={{ width: '250px' }} />
    </StyledMenuSmallScreen>
  )
}

export default MenuSmallScreen