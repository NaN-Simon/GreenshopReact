import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

import { ReactComponent as FacebookSVG } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramSVG } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterSVG } from '../../assets/svg/twitter.svg';
import { ReactComponent as LinkedinSVG } from '../../assets/svg/linkedin.svg';
import { ReactComponent as YoutubeSVG } from '../../assets/svg/youtube.svg';

const StyledFooterHeader = styled.h3`
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
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
const FooterSocial = () => {
  return (
    <div data-name='footer-social'>
      <StyledFooterHeader>
        Social Media
      </StyledFooterHeader>
      <StyledFooterSocialLinkGroup>
        <StyledFooterSocialLink>
          <a href="https://www.facebook.com/"><FacebookSVG fill={theme.palette.info} style={{ marginTop: '3px' }} /></a>
        </StyledFooterSocialLink>
        <StyledFooterSocialLink>
          <a href="https://www.instagram.com/"><InstagramSVG fill={theme.palette.info} style={{ marginTop: '3px' }} /></a>
        </StyledFooterSocialLink>
        <StyledFooterSocialLink>
          <a href="https://www.x.com/"><TwitterSVG fill={theme.palette.info} style={{ marginTop: '3px' }} /></a>
        </StyledFooterSocialLink>
        <StyledFooterSocialLink>
          <a href="https://www.linkedin.com/"><LinkedinSVG fill={theme.palette.info} style={{ marginTop: '3px' }} /></a>
        </StyledFooterSocialLink>
        <StyledFooterSocialLink>
          <a href="https://www.youtube.com/"><YoutubeSVG fill={theme.palette.info} style={{ marginTop: '3px' }} /></a>
        </StyledFooterSocialLink>
      </StyledFooterSocialLinkGroup>

    </div>
  )
}

export default FooterSocial