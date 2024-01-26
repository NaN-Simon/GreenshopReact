import React from 'react'
import styled from 'styled-components'
import Button from '../UI/button/Button';
import theme from '../../theme/theme';
import flower6 from '../../assets/image/flowers/flower6.png';
import flower7 from '../../assets/image/flowers/flower7.png';
import flower8 from '../../assets/image/flowers/flower8.png';

const StyledBannerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 450px;
  background: ${theme.palette.backgroundSecondary};
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
const StyledTable = styled.table`
  border-collapse: collapse;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.devices.sm}) {
   display: none
 }
`
const StyledTh = styled.th`
  width: 100px;
  height: 35px;
  padding: 0 5px;
  border: 1px solid ${theme.palette.info};
  color: ${theme.palette.primary};
  background: transparent;
  font-size: 14px;
  text-align: center;
`
const StyledTd = styled.td`
  background: transparent;
  border: 1px solid ${theme.palette.info};
  color: ${theme.palette.primary};
  margin: 0 1em;
  width: 30px;
  padding: 10px;;
  white-space: nowrap;
  text-align: center;
`

const Banner3 = () => {
  return (
    <StyledBannerSection data-name='banner'>
      <div>
        <StyledHeaderH6>Welcome to GreenShop</StyledHeaderH6>
        <StyledHeaderH1>Join to</StyledHeaderH1>
        <StyledHeaderH1><span style={{ color: theme.palette.info }}>TEAMTREES</span></StyledHeaderH1>
        <Button link='#' style={{ width: '140px', fontWeight: '700', marginTop: '30px' }}>
          JOIN NOW
        </Button>
      </div>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTh>Country</StyledTh>
            <StyledTh>Flower</StyledTh>
            <StyledTh>Size</StyledTh>
          </tr>
          <tr>
            <StyledTd>Russia</StyledTd>
            <StyledTd><img src={flower6} alt="flower6" style={{ width: '100px' }} /></StyledTd>
            <StyledTd>Small</StyledTd>
          </tr>
          <tr>
            <StyledTd>USA</StyledTd>
            <StyledTd><img src={flower7} alt="flower7" style={{ width: '100px' }} /></StyledTd>
            <StyledTd>Large</StyledTd>
          </tr>
          <tr>
            <StyledTd>China</StyledTd>
            <StyledTd><img src={flower8} alt="flower8" style={{ width: '100px' }} /></StyledTd>
            <StyledTd>Medium</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </StyledBannerSection>
  )
}

export default Banner3