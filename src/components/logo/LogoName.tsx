import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'

const StyledLogoName = styled.h3`
  color: ${theme.palette.info};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`
const LogoName = ({ name }: { name: string }) => {
  return (
    <StyledLogoName>
      {name}
    </StyledLogoName>
  )
}

export default LogoName