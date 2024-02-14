import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import RelatedCarousel from '../components/UI/carousel/RelatedCarousel'
import Button from '../components/UI/button/Button'

const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100px;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    max-width: 1200px;
  }
`
const StyledButton = styled(Button)`
  background: none;
  cursor: pointer;
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  padding-bottom: 40px;
  border: 0;
  white-space: nowrap;
  transition: all 0.7s;
  &:hover{
    opacity: 0.5;
 }
`

const ShopPage = () => {
  const addressHandler = () => {
    alert('Home / Shop')
  }

  return (
    <StyledShopPage data-name='shop-page'>
      <StyledButton onClick={addressHandler}>
        <span style={{ fontWeight: 700 }}>Home</span> / Shop / Shopping Cart
      </StyledButton>
      <RelatedCarousel />
    </StyledShopPage>
  )
}

export default ShopPage