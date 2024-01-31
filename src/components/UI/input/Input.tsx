import React, { CSSProperties, FC, forwardRef } from 'react'
import styled from 'styled-components';
import theme from '../../../theme/theme'
type IInput = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  isHidden?: boolean;
  name: string;
  placeholder?: string;
  style?: CSSProperties;
} & React.RefAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 11px;
  border: none;
  border-radius: 6px;
  outline: none;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background: ${theme.palette.backgroundPrimary};
  color: #ACACAC;
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
 `
const Input: FC<IInput> = forwardRef((props, ref) => {
  const { value, setValue, type, isHidden, name, placeholder, style = {}, ...datum } = props

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      {!isHidden && <StyledInput
        ref={ref}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
        style={{ ...style }}
        {...datum}
      />}
    </>
  )
})

export default Input