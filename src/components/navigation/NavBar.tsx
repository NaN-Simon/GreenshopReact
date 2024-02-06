import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components'
import theme from '../../theme/theme';

interface INavBar {
  isVertical?: boolean;
}

const StyledNav = styled.nav`
width: 100%;
`
const StyledUl = styled.ul<{ $vertical?: boolean; }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => props.$vertical ? 'column' : 'row'};
  gap: 0 40px;
  width: 100%;
  white-space: nowrap;
  @media (max-width: ${theme.breakpoints.devices.md}) {
    gap: 8px 20px;
 }
`
const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`
const sharedStyledLink = css<{ $vertical?: boolean; }>`
 padding: ${props => props.$vertical ? '0 50px' : '15px 0'};
 color: ${theme.typography.h3.color};
 font-family: ${theme.typography.h3.fontFamily};
 font-style: ${theme.typography.h3.fontStyle};
 font-weight: ${theme.typography.h3.fontWeight};
 font-size: ${theme.typography.h3.fontSize};
 line-height: ${theme.typography.h3.lineHeight};
 background: transparent;
 text-decoration: none;
 transition: 0.5s all;
 &:hover{
    opacity: 0.5;
 }
`;
const StyledLink = styled(Link)<{ $vertical?: boolean; }>`
 ${sharedStyledLink}
`;

const StyledHashLink = styled(HashLink)<{ $vertical?: boolean; }>`
 ${sharedStyledLink}
`;

const NavBar: FC<INavBar> = ({ isVertical }) => {
  return (
    <StyledNav id='navbar'>
      <StyledUl $vertical={isVertical}>
        <StyledLi><StyledLink $vertical={isVertical} to={'/'}>Home</StyledLink></StyledLi>
        <StyledLi><StyledLink $vertical={isVertical} to={'/shop'}>Shop</StyledLink></StyledLi>
        <StyledLi><StyledLink $vertical={isVertical} to={'https://teamtrees.org/'}>Plant Care</StyledLink></StyledLi>
        <StyledLi><StyledHashLink $vertical={isVertical} smooth to={'/#blog'}>Blogs</StyledHashLink></StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default NavBar