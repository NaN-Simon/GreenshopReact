import React, { CSSProperties, FC } from 'react'
import styled from 'styled-components';

import theme from '../../../../theme/theme';

import { ReactComponent as FacebookSVG } from '../../../../assets/svg/facebook.svg';
import { ReactComponent as TwitterSVG } from '../../../../assets/svg/twitter.svg';
import { ReactComponent as LinkedinSVG } from '../../../../assets/svg/linkedin.svg';
import { ReactComponent as MessageSVG } from '../../../../assets/svg/message.svg';


interface ISocialLinks {
  header?: string;
  style?: CSSProperties;
}

const StyledSocialLink = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  & a{
    padding: 4px 9px;
  }
`
const StyledHeader = styled.h5`
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: 500;
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
`

const SocialLinks: FC<ISocialLinks> = ({ header, style }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', ...style }}>
      <StyledHeader>{header}</StyledHeader>
      <StyledSocialLink>
        <a href="https://www.facebook.com/">
          <FacebookSVG fill={theme.palette.primary} style={{ marginTop: '3px' }} />
        </a>
      </StyledSocialLink>
      <StyledSocialLink>
        <a href="https://www.x.com/">
          <TwitterSVG fill={theme.palette.primary} style={{ marginTop: '3px' }} />
        </a>
      </StyledSocialLink>
      <StyledSocialLink>
        <a href="https://www.linkedin.com/">
          <LinkedinSVG fill={theme.palette.primary} style={{ marginTop: '3px' }} />
        </a>
      </StyledSocialLink>
      <StyledSocialLink>
        <a href='mailto:test@hello.com'>
          <MessageSVG stroke={theme.palette.secondary} style={{ marginTop: '3px' }} />
        </a>
      </StyledSocialLink>
    </div>
  )
}

export default SocialLinks