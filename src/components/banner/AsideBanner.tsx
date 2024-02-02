import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

interface IAsideBanner {
  bannerData: {
    header: string;
    title: string;
    image: string;
    link: string;
  }
}
const StyledAsideBanner = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 470px;
  position: relative;
  background: linear-gradient(180deg, rgba(70, 163, 88, 0.10) 0%, rgba(70, 163, 88, 0.03) 100%);
`
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column
`
const StyledHeader = styled.div`
  color: ${theme.palette.info};
  padding-top: 18px;
  font-family: "Hanged Letters";
  font-size: 4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 4vw;
  text-align: center;
  `
const StyledTitle = styled.div`
  padding-top: 11px;
  color: ${theme.palette.primary};
  text-align: center;
  font-family: "Cera Pro";
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`
const StyledImg = styled.img`
  width: 100%;
`
const StyledSphereGradientBig = styled.span`
  position: absolute;
  right: 33px;
  bottom: 78px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(70, 163, 88, 0.30) -46.09%, rgba(70, 163, 88, 0.00) 103.28%);
  opacity: 0.8
`
const StyledSphereMedium = styled.span`
  position: absolute;
  left: 33px;
  bottom: 117px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid ${theme.palette.info};
  opacity: 0.2;
`
const StyledSphereGradientSmall = styled.span`
  position: absolute;
  left: 21px;
  top: 105px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(70, 163, 88, 0.30) -46.09%, rgba(70, 163, 88, 0.00) 103.28%);
  opacity: 0.8
`
const AsideBanner: FC<IAsideBanner> = ({ bannerData }) => {
  return (
    <StyledAsideBanner data-name='aside-banner'>
    <StyledSphereGradientSmall/>
    <StyledSphereMedium/>
    <StyledSphereGradientBig/>
      <StyledDescription>
        <StyledHeader>
          {bannerData.header}
        </StyledHeader>
        <StyledTitle>
          {bannerData.title}
        </StyledTitle>
      </StyledDescription>
      <StyledImg
        src={bannerData.image}
        alt={bannerData.header} />
    </StyledAsideBanner>
  )
}

export default AsideBanner