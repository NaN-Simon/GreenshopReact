import React, { FC } from 'react'
import styled from 'styled-components'
import { ICard } from '../../types/card'
// import theme from '../../theme/theme';

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 258px;
    height: 300px;
  background: #c3c2c2;
`

const Card: FC<ICard> = ({ id, name, cost }) => {
  return (
    <StyledLi key={id}>
      <div>{name}</div>
      <div>{cost}</div>
    </StyledLi>
  )
}

export default Card