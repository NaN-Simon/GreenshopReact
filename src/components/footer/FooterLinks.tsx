import React, { FC } from 'react'
import styled from 'styled-components'

import theme from '../../theme/theme';
import FooterSocial from './FooterSocial';
import FooterPay from './FooterPay';

import { IFooterLink } from '../../types/footer';

const StyledFooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.6fr;
  gap: 15px;
  width: 100%;
  padding: 25px 10px;
  background: ${theme.palette.backgroundSecondary};
  border-bottom: 1px solid ${theme.palette.info}30;
  list-style-type: none;
  @media (min-width: ${theme.breakpoints.devices.xs}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: ${theme.breakpoints.devices.md}) {
    grid-template-columns: 1fr 1fr 1fr 1.6fr;
    grid-template-rows: none;
  }
`
const StyledFooterLinkGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none
`
const StyledFooterHeader = styled.h3`
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledFooterLink = styled.a`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-decoration: none;
  transition: all 0.5s;
  &:hover{
    opacity: 0.7
  }
  `

const FooterLinks: FC<{ footerLink: IFooterLink }> = ({ footerLink }) => {
  return (
    <StyledFooterLinks data-name='footer-links' >

      {footerLink.map((linkGroup) => (
        <StyledFooterLinkGroup key={linkGroup.header}>

          <StyledFooterHeader>
            {linkGroup.header}
          </StyledFooterHeader>

          {linkGroup.link.map((item: { title: string, link: string }) => (

            <StyledFooterLink
              key={item.title}
              href={item.link}
            >
              {item.title}
            </StyledFooterLink>

          ))}
        </StyledFooterLinkGroup>
      ))}

      <StyledFooterLinkGroup>
        <FooterSocial />
        <FooterPay />
      </StyledFooterLinkGroup>

    </StyledFooterLinks>
  )
}

export default FooterLinks