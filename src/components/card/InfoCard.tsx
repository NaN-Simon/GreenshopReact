import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import { IInfoCard } from '../../types/infoCard';

const StyledInfoCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 250px;
  padding: 30px;
  background: #C3C2C2;
`

const InfoCard: FC<IInfoCard> = ({ id, image, title, description }) => {
  return (
    <StyledInfoCard>
      <div>{id}</div>
      <div>{image}</div>
      <div>{title}</div>
      <div>{description}</div>
    </StyledInfoCard>
  )
}

export default InfoCard