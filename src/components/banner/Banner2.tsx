import React from 'react'
import styled from 'styled-components'
import Button from '../UI/button/Button';
import theme from '../../theme/theme';
import flower4 from '../../assets/image/flowers/flower4.png';

const StyledBannerSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 450px;
background: ${theme.palette.backgroundSecondary};
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
  @media (min-width: ${theme.breakpoints.devices.xs}) {
    font-size: ${theme.typography.h3.fontSize};
  }
  @media (min-width: ${theme.breakpoints.devices.sm}) {
    font-size: ${theme.typography.h2.fontSize};
  }
  @media (min-width: ${theme.breakpoints.devices.md}) {
    font-size: ${theme.typography.h1.fontSize};
  }
  `
const StyledHeaderDescription = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`

const Banner2 = () => {
  const headerH6 = 'Welcome to GreenShop'
  const description = 'Из-за того, что макет имеет только одно разрешение, его пришлось немного адаптировать.'

  return (
    <StyledBannerSection data-name='banner'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '44px', padding: '10px' }}>
        <StyledBannerText>
          <StyledHeaderH6>{headerH6}</StyledHeaderH6>
          <StyledHeaderH1>Hello<span style={{ color: theme.palette.info }}>World</span></StyledHeaderH1>
          <StyledHeaderDescription>{description}</StyledHeaderDescription>
        </StyledBannerText>
        <Button link='https://www.figma.com/file/T9fNIlcua3pIuuZuBoQPOQ/' style={{ width: '140px', fontWeight: '700' }}>
          Figma
        </Button>
      </div>
      <StyledBannerPicture data-name='banner-picture'>
        <div style={{ width: '100%' }}>
          <img style={{ width: '100%', position: 'absolute', left: '10px', bottom: '13px' }} src={flower4} alt="flower4" />
          <img style={{ width: '26%', position: 'absolute', left: '66px', bottom: '0px' }} src={flower4} alt="flower4" />
        </div>
      </StyledBannerPicture>
    </StyledBannerSection>
  )
}

export default Banner2