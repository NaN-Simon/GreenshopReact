import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import HyphenText from '../components/common/HyphenText'

const StyledRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
`
const StyledHeader = styled.h6`
  width: 100%;
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  text-align: center;
`
const StyledInput = styled(Input)`
  width: 300px;
  height: 40px;
  background: none;
  color: ${theme.palette.secondary};
  border: 1px solid ${theme.palette.borderInactive};
  box-shadow: none;
  transition: border 0.5s;
  &:focus{
    border: 1px solid ${theme.palette.info};
  }
`

const Register = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [valueUsername, setValueUsername] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valuePasswordConfirm, setValuePasswordConfirm] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledRegister data-name='form-register'>

      <StyledHeader>
        Enter your email and password to register.
      </StyledHeader>

      <StyledInput
        ref={inputRef}
        value={valueUsername}
        setValue={setValueUsername}
        type='text'
        name='username'
        placeholder='Username'
      />

      <StyledInput
        value={valueEmail}
        setValue={setValueEmail}
        type='email'
        name='email'
        placeholder='Enter your email address'
        />

      <StyledInput
        value={valuePassword}
        setValue={setValuePassword}
        type='password'
        name='password'
        placeholder='Password'
      />

      <StyledInput
        value={valuePasswordConfirm}
        setValue={setValuePasswordConfirm}
        type='password'
        name='password'
        placeholder='Confirm Password'
      />


      <Button style={{ width: '100%', height: '45px' }} link='#'>
        Register
      </Button>

      <HyphenText>
        Or register with
      </HyphenText>

    </StyledRegister>
  )
}

export default Register