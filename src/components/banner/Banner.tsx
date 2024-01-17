import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import flower1 from '../../assets/image/flowers/flower1.png';
import flower2 from '../../assets/image/flowers/flower2.png';
import Button from '../UI/button/Button';

const StyledBannerSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 450px;
background: ${theme.palette.backgroundSecondary};

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

const StyledBannerText = styled.div`
  max-width: 557px;
  display: flex;
  flex-direction: column;
`
const StyledBannerPicture = styled.div`
  position: relative;
  width: 450px;
  height: 450px;

  @media (max-width: ${theme.breakpoints.devices.sm}) {
   display: none
 }
`

const StyledHeaderH6 = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-transform: uppercase;
  `
const StyledHeaderH1 = styled.h1`
  color: ${theme.typography.h1.color};
  font-family: ${theme.typography.h1.fontFamily};
  font-style: ${theme.typography.h1.fontStyle};
  font-weight: ${theme.typography.h1.fontWeight};
  font-size: ${theme.typography.h1.fontSize};
  line-height: ${theme.typography.h1.lineHeight};
  text-transform: uppercase;
  `
const StyledHeaderDescription = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`

const Banner = () => {
  const headerH6 = 'Welcome to GreenShop'
  const description = 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'

  return (
    <StyledBannerSection data-name='banner'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <StyledBannerText>
          <StyledHeaderH6>{headerH6}</StyledHeaderH6>
          <StyledHeaderH1>Let’s Make a Better <span style={{ color: theme.palette.info }}>Planet</span></StyledHeaderH1>
          <StyledHeaderDescription>{description}</StyledHeaderDescription>
        </StyledBannerText>
        <Button style={{ width: '140px', fontWeight: '700' }}>
          SHOP NOW
        </Button>
      </div>
      <StyledBannerPicture data-name='banner-picture'>
        <div style={{ width: '100%' }}>
          <img style={{ width: '100%', position: 'absolute', left: '10px', bottom: '13px' }} src={flower1} alt="flower1" />
          <img style={{ width: '26%', position: 'absolute', left: '66px', bottom: '0px' }} src={flower2} alt="flower2" />
        </div>
      </StyledBannerPicture>
    </StyledBannerSection>
  )
}

export default Banner