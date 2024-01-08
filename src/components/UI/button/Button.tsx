import React, { PropsWithChildren, ReactNode, CSSProperties } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../../theme/theme';

interface IButton {
  children: ReactNode;
  styles?: CSSProperties;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100px;
  height: 35px;
  border-radius: 6px;
  outline: none;
  border: none;
  color: ${theme.palette.backgroundPrimary};
  font-family: ${theme.typography.h4.fontFamily};
  font-style: ${theme.typography.h4.fontStyle};
  font-weight: ${theme.typography.h4.fontWeight};
  font-size: ${theme.typography.h4.fontSize};
  line-height: ${theme.typography.h4.lineHeight};
  background: ${theme.palette.info};
  transition: 0.25s all;
  cursor: pointer;
  &:hover{
    opacity: 0.75;
  }
`

const Button = ({ children, styles }: PropsWithChildren<IButton>) => {
  return (
    <StyledButton style={{...styles}}>
      {children}
    </StyledButton>
  )
}

export default Button