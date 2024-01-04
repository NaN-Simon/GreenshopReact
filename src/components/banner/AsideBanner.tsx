import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

const StyledAsideBanner = styled.aside`
  width: 100%;
  height: 470px;
  background: ${theme.palette.testBox};
`

const AsideBanner = () => {
  return (
    <StyledAsideBanner>AsideBanner</StyledAsideBanner>
  )
}

export default AsideBanner