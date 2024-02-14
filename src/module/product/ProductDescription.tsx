import React from 'react'
import { styled } from 'styled-components'
import theme from '../../theme/theme'
import { getParagraph } from '../../utils/random'

const StyledDescription = styled.p`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`

const ProductDescription = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '16px' }}>
        <StyledDescription>{getParagraph(4, 7)}</StyledDescription>
        <StyledDescription>{getParagraph(4, 7)}</StyledDescription>
        <div>
          <StyledDescription style={{ fontWeight: 700 }}> Living Room: </StyledDescription>
          <StyledDescription>{getParagraph(3, 5)}</StyledDescription>
        </div>
        <div>
          <StyledDescription style={{ fontWeight: 700 }}> Dining Room: </StyledDescription>
          <StyledDescription>{getParagraph(3, 5)}</StyledDescription>
        </div>
        <div>
          <StyledDescription style={{ fontWeight: 700 }}> Office: </StyledDescription>
          <StyledDescription>{getParagraph(2, 4)}</StyledDescription>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription