import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

interface ICategories {
  header?: string,
  list: {
    id?: number,
    name: string,
    count: number
  }[]
}

const StyledNav = styled.nav`
  width: 310px;
  flex-shrink: 0;
  background: ${theme.palette.testBox}
`

const StyledHeader = styled.h2`
  color: ${theme.typography.h2.color};
  font-family: ${theme.typography.h2.fontFamily};
  font-style: ${theme.typography.h2.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h2.fontSize};
  line-height: ${theme.typography.h2.lineHeight};
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style-type: none;
  padding: 30px;
`

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  background: #c3c2c2;
`

const Categories: FC<ICategories> = ({ list, header }) => {
  return (
    <StyledNav data-name='categories' >
      <StyledHeader>
        {header}
      </StyledHeader>
      <StyledUl>
        {list.map((item: any) => (
          <StyledLi key={item.name}>
            <div>{item.name}</div>
            <div>({item.count})</div>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default Categories