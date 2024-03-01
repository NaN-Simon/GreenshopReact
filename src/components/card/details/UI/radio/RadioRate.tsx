import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import theme from '../../../../../theme/theme';

import { ReactComponent as StarSVG } from '../../../../../assets/svg/star.svg';

const StyledRate = styled.div`
  display: flex;
`
const StyledLabel = styled.label<{ $active?: boolean; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  transition: opacity 0.5s;
  /* pointer-events: none; */ // если значение не изменяемое - закомментировать
  cursor: pointer;
  &:hover{
    opacity: 0.7
  }
`
const RadioRate = ({ rate }: { rate: number }) => {
  const [selectedValue, setSelectedValue] = useState(rate);

  useEffect(() => {
    setSelectedValue(rate)
  }, [rate])

  const handleRadioChange = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <StyledRate data-name='radio-rate'>
      {[1, 2, 3, 4, 5].map((item) => {
        const rateColor = selectedValue >= item
          ? theme.palette.warning
          : theme.palette.borderInactive

        return (
          <div data-name='radio-rate-item' key={item}>
            <input
              type="radio"
              id={item.toString()}
              value={item}
              checked={selectedValue === item}
              onChange={() => handleRadioChange(item)}
              style={{ display: 'none' }}
            />
            <StyledLabel $active={selectedValue >= item} htmlFor={item.toString()}>
              <StarSVG fill={rateColor} />
            </StyledLabel>
          </div>
        )
      })}


    </StyledRate>
  )
}

export default RadioRate