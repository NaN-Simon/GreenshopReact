import React, { FC, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';

interface ICategories {
  header?: string,
  list: Record<string, number>,
  handler: (key: string) => void,
}

const StyledNav = styled.nav`
  width: 100%;
  padding: 9px 18px;
  background: ${theme.palette.backgroundSecondary};
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

const Categories: FC<ICategories> = ({ list, header, handler }) => {
  const arrayOfKeysValues = Object.entries(list);
  const [currentKey, setCurrentKEy] = useState('null') // first object's key

  const toggleHandler = (categoryName: string) => {

    /* alreadySelected
    * проверка выбрано ли значение повторно
    * если выбрано повторно фильтр будет сброшен
    */
   
    const alreadySelected = currentKey === categoryName
    const newValue = alreadySelected ? "" : categoryName
    handler(newValue)
    setCurrentKEy(newValue)
  }

  return (
    <StyledNav data-name='categories' >
      <StyledHeader>
        {header}
      </StyledHeader>
      <StyledUl>
        {arrayOfKeysValues.map((item) => {
          const categoryName = item[0]
          const categoryCount = item[1]
          return (
            <StyledLi
              key={categoryName}
              onClick={() => {
                toggleHandler(categoryName)
              }}
              $info={currentKey === categoryName} // value
            >
              <div>{categoryName}</div>
              <div>{categoryCount}</div>
            </StyledLi>
          )
        }
        )}
      </StyledUl>
    </StyledNav>
  )
}

export default Categories