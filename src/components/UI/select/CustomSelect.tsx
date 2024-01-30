import React, { FC, useState } from 'react'
import Select, { StylesConfig } from 'react-select';
import { styled } from 'styled-components'
import theme from '../../../theme/theme';
interface ICustomSelect {
  handler: (select: string) => void,
}
interface IOptions {
  label: string;
  value: string;
}

const StyledCustomSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const StyledTitle = styled.span`
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
`

const options: IOptions[] = [
  { value: 'nameAZ', label: 'Названию (А-Я)' },
  { value: 'nameZA', label: 'Названию (Я-А)' },
  { value: 'priceFromDownToUp', label: 'Цене (сначала дешевые)' },
  { value: 'priceFromUpToDown', label: 'Цене (сначала дорогие)' },
];

const SelectStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : 'transparent',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? 'grey' : theme.typography.h5.color,
    fontFamily: theme.typography.h5.fontFamily,
    fontStyle: theme.typography.h5.fontStyle,
    fontWeight: theme.typography.h5.fontWeight,
    fontSize: theme.typography.h5.fontSize,
    lineHight: theme.typography.h5.lineHeight,
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
}

const CustomSelect: FC<ICustomSelect> = ({ handler }) => {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);

  return (
    <StyledCustomSelect>
      <StyledTitle>Sort by:</StyledTitle>
      <Select
        placeholder='Default sorting'
        defaultValue={selectedOption}
        onChange={(data) => {
          const typedData = data as IOptions;
          setSelectedOption(typedData)
          data && handler(typedData.value);
        }}
        styles={SelectStyles}
        options={options}
      />
    </StyledCustomSelect>
  );
}

export default CustomSelect