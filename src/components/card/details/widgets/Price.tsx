import React, { FC } from 'react'
import styled from 'styled-components'

import theme from '../../../../theme/theme'

import { IPriceOfCard } from '../../../../types/card'

const StyledPrice = styled.h3`
  color: ${theme.palette.info};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledPrevPrice = styled.h3`
  color: #A5A5A5;
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: ${theme.typography.h3.fontWeight};
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
  text-decoration: line-through;
`

const Price:FC<IPriceOfCard> = ({currency, price, prevPrice}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <StyledPrice>{currency}{price}</StyledPrice>
      {prevPrice && <StyledPrevPrice>{currency}{prevPrice}</StyledPrevPrice>}
    </div>
  )
}

export default Price