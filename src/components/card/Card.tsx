import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

interface ICard {
  list: {
    id: number,
    name: string,
    cost: string
  }[]
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 33px;
  list-style-type: none;
  background: ${theme.palette.testBox}
`

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 258px;
    height: 300px;
  background: #c3c2c2;
`

const Card: FC<ICard> = ({ list }) => {
  console.log(list);

  return (
    <div>
      <StyledUl>
        {list.map((item: any) => (
          <StyledLi key={item.name}>
            <div>{item.name}</div>
            <div>{item.cost}</div>
          </StyledLi>
        ))}
      </StyledUl>

    </div>
  )
}

export default Card