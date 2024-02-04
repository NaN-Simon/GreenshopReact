import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import HyphenText from '../components/common/HyphenText'

const StyledLogin = styled.div`
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
  border: 1px solid #eaeaea;
  box-shadow: none;
  transition: border 0.5s;
  &:focus{
    border: 1px solid ${theme.palette.info};
  }
`
const StyledButton = styled(Button)`
  width: 120px;
  background: none;
  color: ${theme.palette.info};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledLogin>

      <StyledHeader>
        Enter your username and password to login.
      </StyledHeader>

      <StyledInput
        ref={inputRef}
        value={valueLogin}
        setValue={setValueLogin}
        type='email'
        name='login'
        placeholder='example@gmail.com'
      />

      <StyledInput
        value={valuePassword}
        setValue={setValuePassword}
        type='password'
        name='password'
        placeholder='Password'
      />

      <StyledButton link='#' >
        Forgot password?
      </StyledButton>

      <Button style={{ width: '100%', height: '45px', marginBottom: '45px' }} link='#'>
        Login
      </Button>

      <HyphenText>
        Or login with
      </HyphenText>

    </StyledLogin>
  )
}

export default Login