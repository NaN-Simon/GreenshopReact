import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

const StyledSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 450px;
/* background: ${theme.palette.backgroundSecondary}; */
background: ${theme.palette.testBox};

@media (min-width: ${theme.breakpoints.devices.sm}) {
   width: ${theme.breakpoints.devices.sm};
 }

 @media (min-width: ${theme.breakpoints.devices.md}) {
   width: ${theme.breakpoints.devices.md};
 }

 @media (min-width: ${theme.breakpoints.devices.lg}) {
   width: ${theme.breakpoints.devices.lg};
 }

 @media (min-width: ${theme.breakpoints.devices.xl}) {
   width: 1200px;
 }
`

const Banner = () => {
  return (
    <StyledSection>Banner</StyledSection>
  )
}

export default Banner