import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { HashLink } from 'react-router-hash-link';
import Logo from '../logo/Logo'

import theme from '../../theme/theme';

import { ReactComponent as CallingSVG } from '../../assets/svg/calling.svg';
import { ReactComponent as MessageSVG } from '../../assets/svg/message.svg';
import { ReactComponent as LocationSVG } from '../../assets/svg/location.svg';

import { IFooterContact } from '../../types/footer';

const StyledFooterContact = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.6fr;
  gap: 15px;
  width: 100%;
  padding: 25px 10px;
  background: ${theme.palette.info}1a;
  border-top: 1px solid ${theme.palette.info}30;
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
const StyledFooterContactElement = styled.li<{ $padding?: string; }>`
  display: flex;
  align-items: center;
  gap: 9px;
  max-width: 260px;
  padding: ${props => props.$padding ? props.$padding : '0'};
  @media (max-width: ${theme.breakpoints.devices.md}) {
    padding: 0;
  }
`
const sharedStyledLink = css`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-decoration: none;
  transition: 0.5s all;
  &:hover{
    opacity: 0.5;
 }
`
const StyledLink = styled.a`
 ${sharedStyledLink}
`;

const StyledHashLink = styled(HashLink)`
 ${sharedStyledLink}
`;

const FooterContact:FC<IFooterContact> = ({location, email, phoneNumber}) => {
  return (
    <StyledFooterContact data-name='footer-contact'>

      <StyledFooterContactElement $padding='0 0 0 23px'>
        <StyledHashLink to={'/'}>
          <Logo />
        </StyledHashLink>
      </StyledFooterContactElement>

      <StyledFooterContactElement>
        <LocationSVG width={20} height={20} />
        {location}
      </StyledFooterContactElement>

      <StyledFooterContactElement>
        <MessageSVG stroke='#46A358' width={20} height={20} />
        <StyledLink href={'mailto:' + email}>
          {email}
        </StyledLink>
      </StyledFooterContactElement>

      <StyledFooterContactElement>
        <CallingSVG width={20} height={20} />
        <StyledLink href={'tel:' + phoneNumber}>
          {phoneNumber}
        </StyledLink>
      </StyledFooterContactElement>

    </StyledFooterContact>
  )
}

export default FooterContact