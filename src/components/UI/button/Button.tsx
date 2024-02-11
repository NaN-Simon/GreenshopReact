import React, { PropsWithChildren, ReactNode, CSSProperties, forwardRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../../theme/theme';

interface IButton {
  children: ReactNode;
  link?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
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
const StyledLink = styled(Link)`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  gap: 4px;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
    `

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IButton>>((props: PropsWithChildren<IButton>, ref) => {

  const { children, link, style, className, onClick, ...datum } = props

  const ChildrenWithLink = () => {
    return (
        <StyledLink to={link!}>
          {children}
        </StyledLink>
    )
  }

  return (
    <StyledButton
      style={{ ...style }}
      className={className}
      ref={ref}
      onClick={onClick}
      {...datum}>
      {link && <ChildrenWithLink/>}
      {!link && children}
    </StyledButton>
  )
})

export default Button