import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme';

interface IRangeSlider {
  header?: string,
}

const StyledWrapper = styled.div`
  background: ${theme.palette.testBox};
`

const StyledHeader = styled.h2`
  color: ${theme.typography.h2.color};
  font-family: ${theme.typography.h2.fontFamily};
  font-style: ${theme.typography.h2.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h2.fontSize};
  line-height: ${theme.typography.h2.lineHeight};
`

const RangeSlider: FC<IRangeSlider> = ({ header }) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        {header}
      </StyledHeader>
      <span>
        RangeSlider
      </span>
    </StyledWrapper>
  )
}

export default RangeSlider