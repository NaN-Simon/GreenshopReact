import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import theme from '../../theme/theme'

import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg'
import { ReactComponent as HeartSVG } from '../../assets/svg/heart.svg'
import { ReactComponent as FindSVG } from '../../assets/svg/find.svg'

import { ICard } from '../../types/card'
import { Link, useNavigate } from 'react-router-dom';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const StyledImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const StyledBookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 15px;
  width: 80px;
  height: 29px;
  background: ${theme.palette.info};
  color: ${theme.palette.backgroundPrimary};
  font-family: ${theme.typography.h4.fontFamily};
  font-style: ${theme.typography.h4.fontStyle};
  font-weight: ${theme.typography.h4.fontWeight};
  font-size: ${theme.typography.h4.fontSize};
  line-height: ${theme.typography.h4.lineHeight};
`
const StyledImg = styled.img`
  width: 250px;
  height: 250px;
  background: inherit
`
const StyledWidgetsItems = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  position: absolute;
  transform: translate(-50%, -100%);
  left: 50%;
`
const StyledWidgetsItem = styled.span`
  cursor: pointer;
`
const StyledName = styled.h4`
  color: ${theme.typography.h4.color};
  font-family: ${theme.typography.h4.fontFamily};
  font-style: ${theme.typography.h4.fontStyle};
  font-weight: ${theme.typography.h4.fontWeight};
  font-size: ${theme.typography.h4.fontSize};
  line-height: ${theme.typography.h4.lineHeight};
`
const StyledPrice = styled.div`
  color: ${theme.palette.info};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledPrevPrice = styled.div`
  color: #A5A5A5;
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: ${theme.typography.h3.fontStyle};
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
  text-decoration: line-through;
`
const StyledWidgets = styled.div`
  display: none;
  position: relative;
`
const StyledLi = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 258px;
  height: 349px;
  border-top: 1px solid transparent;
  background: ${theme.palette.backgroundSecondary};
  transition: all 0.5s;
  cursor: pointer;
  &:hover{
    & ${StyledWidgets}{
      display:block;
    };
    border-top: 1px solid ${theme.palette.info}
  }
`

const Card: FC<ICard> = ({ id, image, name, currency, price, prevPrice }) => {
  const isShowDiscount = prevPrice && prevPrice >= price
  const percentDiscount = isShowDiscount ? (Math.floor(100 - ((+price * 100) / +prevPrice))) : 0
  const navigate = useNavigate();

  const basketHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    alert('basketHandler')
  }

  const likeHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    alert('likeHandler')
  }

  const findHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    alert('findHandler')
  }

  return (
    <StyledLi
      data-name='card'
      variants={item}
      key={id}
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >

      <StyledImage data-name='card-image'>
        {isShowDiscount && (
          <StyledBookmark>
            {percentDiscount}% OFF
          </StyledBookmark>)}
        <StyledImg src={image} alt={name} />
      </StyledImage>

      <StyledWidgets data-name='card-widgets'>
        <StyledWidgetsItems>
          <StyledWidgetsItem onClick={basketHandler}><CartSVG fill={theme.palette.info} /></StyledWidgetsItem>
          <StyledWidgetsItem onClick={likeHandler}><HeartSVG fill={theme.palette.primary} /></StyledWidgetsItem>
          <StyledWidgetsItem onClick={findHandler}><FindSVG /></StyledWidgetsItem>
        </StyledWidgetsItems>
      </StyledWidgets>

      <div data-name='card-name'>
        <StyledName>{name}</StyledName>
        <div style={{ display: 'flex', gap: '16px' }}>
          <StyledPrice>
            <span>{currency}</span>
            <span>{price.toFixed(2)}</span>
          </StyledPrice>
          {prevPrice && (
            <StyledPrevPrice>
              <span>{currency}</span>
              <span>{prevPrice.toFixed(2)}</span>
            </StyledPrevPrice>
          )}
        </div>
      </div>

    </StyledLi>
  )
}

export default Card