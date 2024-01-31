import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import { IInfoCard } from '../../types/infoCard';

const StyledInfoCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 260px;
  height: 250px;
  padding: 30px;
  background: ${theme.palette.backgroundSecondary};
  @media (max-width: ${theme.breakpoints.devices.sm}) {
    width: 240px;
 }
`
const StyledImg = styled.img`
  width: auto;
  height: 78px;
  background: inherit
`
const StyledTitle = styled.h3`
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: 20px;
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledDescription = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`
const InfoCard: FC<IInfoCard> = ({ image, title, description }) => {
  return (
    <StyledInfoCard>
      <StyledImg src={image} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledInfoCard>
  )
}

export default InfoCard