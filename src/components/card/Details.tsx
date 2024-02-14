import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  background: ${theme.palette.testBox}
`

const Details = () => {
  return (
    <StyledDetails data-name='details'>
      Details
    </StyledDetails>
  )
}

export default Details