import React, { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components';
import theme from '../../theme/theme';

interface IHyphenText {
  children: ReactNode;
  style?: CSSProperties;
  className?: string
}

const StyledHyphenText = styled.h6`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-align: center;
  white-space: nowrap;
`
const StyledHyphenTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const StyledLine = styled.div`
  background: ${theme.palette.borderInactive};
  height: 1px;
  width: 100%;
  margin: 0 10px;
`
const HyphenText: FC<IHyphenText> = ({ children }) => {
  return (
    <StyledHyphenTextWrapper>
      <StyledLine />
      <StyledHyphenText>{children}</StyledHyphenText>
      <StyledLine />
    </StyledHyphenTextWrapper>
  )
}

export default HyphenText