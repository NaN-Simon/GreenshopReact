import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../theme/theme';

const StyledNav = styled.nav`
background: ${theme.palette.testBox}
`
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
`
const StyledLi = styled.li`
list-style-type: none;
`
const StyledLink = styled(Link)`
padding: 5px;
color: ${theme.typography.h2.color};
font-family: ${theme.typography.h2.fontFamily};
font-style: ${theme.typography.h2.fontStyle};
font-weight: ${theme.typography.h2.fontWeight};
font-size: ${theme.typography.h2.fontSize};
line-height: ${theme.typography.h2.lineHeight};
background: transparent;
text-decoration: none;
transition: 0.5s all;
&:hover{
  opacity: 0.5;
}
`

const NavBar = () => {
  return (
    <StyledNav id='navbar'>
      <StyledUl>
        <StyledLi><StyledLink to={'/'}>Home</StyledLink></StyledLi>
        <StyledLi><StyledLink to={'/shop'}>Shop</StyledLink></StyledLi>
        <StyledLi><StyledLink to={'https://teamtrees.org/'}>Plant Care</StyledLink></StyledLi>
        <StyledLi><StyledLink to={'#blogs'}>Blogs</StyledLink></StyledLi>
        <StyledLi><StyledLink to={'https://www.figma.com/file/T9fNIlcua3pIuuZuBoQPOQ/%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-(Copy)?type=design&node-id=2-2&mode=design&t=ggj1Xt5JYZWJdIlY-0'}>Figma</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default NavBar