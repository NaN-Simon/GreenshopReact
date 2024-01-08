import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import { footerContact } from '../../mock-data/footer-contact';
import Logo from '../logo/Logo'
import { ReactComponent as CallingSVG } from '../../assets/svg/calling.svg';
import { ReactComponent as MessageSVG } from '../../assets/svg/message.svg';
import { ReactComponent as LocationSVG } from '../../assets/svg/location.svg';

const StyledFooterContact = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
  /* background: rgba(70, 163, 88, 0.10); */
  background: ${theme.palette.testBox};
  list-style-type: none;
`
const StyledFooterContactElement = styled.li`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 260px;
`

const FooterContact = () => {
  return (
    <StyledFooterContact data-name='contact-banner'>
      <StyledFooterContactElement style={{ paddingLeft: '23px' }}><Logo /></StyledFooterContactElement>
      <StyledFooterContactElement>
        <LocationSVG width={20} height={20} />
        {footerContact.location}
      </StyledFooterContactElement>
      <StyledFooterContactElement>
        <MessageSVG width={20} height={20} />
        {footerContact.email}
      </StyledFooterContactElement>
      <StyledFooterContactElement>
        <CallingSVG width={20} height={20} />
        {footerContact.phoneNumber}
      </StyledFooterContactElement>
    </StyledFooterContact>
  )
}

export default FooterContact