import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme'

const StyledRelatedCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  background: ${theme.palette.testBox};
  @media (min-width: ${theme.breakpoints.devices.md}) {
    max-width: 1200px;
  }
`

const RelatedCarousel = () => {
  return (
    <StyledRelatedCarousel data-name='related-carousel'>
      RelatedCarousel
    </StyledRelatedCarousel>
  )
}

export default RelatedCarousel