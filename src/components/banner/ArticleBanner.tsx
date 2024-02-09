import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import Button from '../UI/button/Button';
import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'
import { IBannerInfo } from '../../types/banner';

const StyledArticleBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 28px;
  width: 100%;
  background: ${theme.palette.backgroundPrimary};
  margin-bottom: 138px;
  @media (max-width: ${theme.breakpoints.devices.md}) {
   flex-direction: column;
 }
`
const StyledArticleBannerItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  height: 250px;
  padding: 0 30px;
  background: ${theme.palette.backgroundSecondary};
  @media (max-width: ${theme.breakpoints.devices.md}) {
    width: 100%;
 }
`
const StyledImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 292px;
`
const StyledImg = styled.img`
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  background: inherit;
`
const StyledHeaderH3 = styled.h3`
  max-width: 200px;
  padding-bottom: 5px;
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
  text-transform: uppercase;
  text-align: end;
  `
const StyledHeaderDescription = styled.h6`
  padding-bottom: 20px;
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-align: end;
`

const ArticleBanner: FC<{data: IBannerInfo}> = ({ data }) => {
  return (
    <StyledArticleBanner data-name='article-banner'>
      {data.map((item) => (
        <StyledArticleBannerItem key={item.id}>
          <StyledImage data-name='card-image'>
            <StyledImg src={item.image} alt={item.header} />
          </StyledImage>
          <StyledDescription>
            <StyledHeaderH3>{item.header}</StyledHeaderH3>
            <StyledHeaderDescription>{item.title}</StyledHeaderDescription>
            <Button link={item.link} style={{ width: '140px', height: '40px' }}>
                <span>Find more</span>
                <ArrowSVG style={{ paddingTop: '2px' }} />
            </Button>
          </StyledDescription>
        </StyledArticleBannerItem>
      ))}

    </StyledArticleBanner>
  )
}

export default ArticleBanner