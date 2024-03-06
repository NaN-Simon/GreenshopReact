import React from 'react'
import styled from 'styled-components';

import { ReactComponent as InfoSVG } from '../../assets/svg/info.svg';

import theme from '../../theme/theme';

const StyledWarning = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px
`

const StyledTitle = styled.p`
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: 12px;
  line-height: ${theme.typography.h6.lineHeight};
`

const Warning = ({ message }: { message?: string }) => {
  return (
    <StyledWarning>
      <InfoSVG fill={theme.palette.info} style={{ width: '15px' }} />
      <StyledTitle>{message}</StyledTitle>
    </StyledWarning>
  )
}

export default Warning