import React, { FC } from 'react'
import styled from 'styled-components'
import Button from '../UI/button/Button';
import theme from '../../theme/theme';
import flower4 from '../../assets/image/flowers/flower4.png';

interface IBanner {
  id: number,
  header: string,
  title: string,
  description: string,
  buttonName: string,
  link: string,
  image: string,
}

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
  span {
    color: ${theme.palette.info}; // This will color the last word green
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

const Banner: FC<IBanner> = (props) => {
  const { header, title, description, buttonName, link, image } = props

  const highlightLastWord = (title: string) => {
    const words = title.split(' ');
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span>{lastWord}</span>
      </>
    );
  };

  return (
    <StyledBannerSection data-name='banner'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '44px', padding: '20px' }}>
        <StyledBannerText>
          <StyledHeaderH6>{header}</StyledHeaderH6>
          <StyledHeaderH1>{highlightLastWord(title)}</StyledHeaderH1>
          <StyledHeaderDescription>{description}</StyledHeaderDescription>
        </StyledBannerText>
        <Button link={link} style={{ width: '140px', fontWeight: '700' }}>
          {buttonName}
        </Button>
      </div>
      <StyledBannerPicture data-name='banner-picture'>
        <img
          style={{ width: '100%' }}
          src={image} alt={title}
          onClick={() => {
            console.log('BannerPicture')
          }} />
      </StyledBannerPicture>
    </StyledBannerSection>
  )
}

export default Banner