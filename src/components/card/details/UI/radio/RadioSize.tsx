import React, { CSSProperties, FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '../../../../../theme/theme';

interface IRadioSize {
  value?: string
  style?: CSSProperties;
}
const StyledRadioSize = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledRadio = styled.div`
  display: flex;
  gap: 10px;
`
const StyledHeader = styled.h5`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: 500;
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  padding-bottom: 4px;
`
const StyledLabel = styled.label<{ $active?: boolean; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${props => props.$active ? theme.palette.info : theme.palette.borderInactive};
  color: ${props => props.$active ? theme.palette.info : theme.palette.secondary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${props => props.$active ? 700 : theme.typography.h6.fontWeight};
  font-size: ${props => props.$active ? theme.typography.h4.fontSize : theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  transition: border 0.5s, opacity 0.5s;
  /* pointer-events: none; */ // если значение не изменяемое - закомментировать
  cursor: pointer;
  &:hover{
    opacity: 0.7
  }
`
const RadioSize: FC<IRadioSize> = ({ value, style }) => {

  let initialValue = ''
  switch (value) {
    case 'Small':
      initialValue = 'S'
      break
    case 'Medium':
      initialValue = 'M'
      break
    case 'Large':
      initialValue = 'L'
      break
    case 'ExtraLarge':
      initialValue = 'XL'
      break
    default:
      initialValue = 'M'
  }

  const [selectedValue, setSelectedValue] = useState(initialValue);

  useEffect(() => {
    setSelectedValue(initialValue)
  }, [value])

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    console.log(value);
  };


  return (
    <StyledRadioSize style={{ ...style }} data-name='radio-size'>
      <StyledHeader>
        Size:
      </StyledHeader>

      <StyledRadio>
        {["S", "M", "L", "XL"].map((item) => {
          return (
            <div data-name='radio-size-item' key={item}>
              <input
                type="radio"
                id={item}
                value={item}
                checked={selectedValue === item}
                onChange={() => handleRadioChange(item)}
                style={{ display: 'none' }}
              />
              <StyledLabel $active={selectedValue === item} htmlFor={item}>{item}</StyledLabel>
            </div>
          )
        })}
      </StyledRadio>
    </StyledRadioSize>
  );
}

export default RadioSize;
