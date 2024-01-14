import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

interface ICategories {
  header?: string,
  list: {
    id: number,
    name: string,
    count: number
  }[]
}

const StyledNav = styled.nav`
  width: 310px;
  flex-shrink: 0;
  background: ${theme.palette.backgroundSecondary};
  padding: 9px 18px;
`

const StyledHeader = styled.h3`
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style-type: none;
  padding: 12px;
`

const StyledLi = styled.li<{ $info?: boolean; }>`
  display: flex;
  justify-content: space-between;
  color: ${props => props.$info ? theme.palette.info : theme.palette.primary};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  transition: all 0.4s;
  cursor: pointer;
  &:hover{
    opacity: 0.7
  }
`

const Categories: FC<ICategories> = ({ list, header }) => {
  const currentItem = list[0].id
  return (
    <StyledNav data-name='categories' >
      <StyledHeader>
        {header}
      </StyledHeader>
      <StyledUl>
        {list.map((item: { id: number, name: string, count: number }) => (
          <StyledLi $info={currentItem === item.id} key={item.name}>
            <div>{item.name}</div>
            <div>({item.count})</div>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default Categories