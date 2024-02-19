import React, { CSSProperties, FC } from 'react'
import styled from 'styled-components';

import theme from '../../../../../theme/theme';

interface ITextbox {
  children: React.ReactNode;
  header?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>
  style?: CSSProperties;
}

const StyledHeader = styled.h5`
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: 500;
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
`
const StyledTitle = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`

const Textbox: FC<ITextbox> = ({ header, children, style }) => {
  return (
    <div style={{ ...style }}>
      <StyledHeader>
        {header}
      </StyledHeader>
      <StyledTitle>
        {children}
      </StyledTitle>
    </div>
  )
}

export default Textbox