import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import { footerLinks } from '../../mock-data/footer-links';
import { ReactComponent as FacebookSVG } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramSVG } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterSVG } from '../../assets/svg/twitter.svg';
import { ReactComponent as LinkedinSVG } from '../../assets/svg/linkedin.svg';
import { ReactComponent as YoutubeSVG } from '../../assets/svg/youtube.svg';
import paySystems from '../../assets/image/paySystems.png';

const StyledFooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${theme.palette.testBox};
  padding: 32px 23px 29px 23px;
  list-style-type: none;
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
const StyledFooterLink = styled.h6`
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  `
const StyledFooterSocialLinkGroup = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none
  `
const StyledFooterSocialLink = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid rgba(70, 163, 88, 0.20);
  & a{
    padding: 4px 9px;
  }
`

const FooterLinks = () => {
  return (
    <StyledFooterLinks data-name='footer-links' >
      {footerLinks.map((linkGroup) => (
        <StyledFooterLinkGroup>
          <StyledFooterHeader>
            {linkGroup.header}
          </StyledFooterHeader>
          {linkGroup.links.map((link) => (
            <StyledFooterLink>{link}</StyledFooterLink>
          ))}
        </StyledFooterLinkGroup>
      ))}
      <StyledFooterLinkGroup>
        <StyledFooterHeader>
          Social Media
        </StyledFooterHeader>
        <StyledFooterSocialLinkGroup>
          <StyledFooterSocialLink>
            <a href="https://www.facebook.com/"><FacebookSVG style={{ marginTop: '3px' }} /></a>
          </StyledFooterSocialLink>
          <StyledFooterSocialLink>
            <a href="https://www.instagram.com/"><InstagramSVG style={{ marginTop: '3px' }} /></a>
          </StyledFooterSocialLink>
          <StyledFooterSocialLink>
            <a href="https://www.x.com/"><TwitterSVG style={{ marginTop: '3px' }} /></a>
          </StyledFooterSocialLink>
          <StyledFooterSocialLink>
            <a href="https://www.linkedin.com/"><LinkedinSVG style={{ marginTop: '3px' }} /></a>
          </StyledFooterSocialLink>
          <StyledFooterSocialLink>
            <a href="https://www.youtube.com/"><YoutubeSVG style={{ marginTop: '3px' }} /></a>
          </StyledFooterSocialLink>
        </StyledFooterSocialLinkGroup>
        <StyledFooterHeader>
          We accept
        </StyledFooterHeader>
        <img src={paySystems} alt="paySystems" />
      </StyledFooterLinkGroup>
    </StyledFooterLinks>
  )
}

export default FooterLinks