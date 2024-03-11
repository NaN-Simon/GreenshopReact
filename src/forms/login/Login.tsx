import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/button/Button'

import HyphenText from '../../components/common/HyphenText'
import Warning from '../../components/common/Warning';

import useFocus from '../../hooks/useFocus';

import { validationSchema } from './schema';

import { ILoginData } from '../../types/auth';

import { AppDispatch, RootState } from '../../store/store';

import { loginAuth, loginValidation } from '../../store/reducers/authSlice'

import theme from '../../theme/theme'

interface ILogin {
  closeModal: () => void
}

const StyledLoginForm = styled.form`
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

const Login: FC<ILogin> = ({ closeModal }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isValidLogin, error } = useSelector((state: RootState) => state.authReducer)

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const emailRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...registerEmail } = register('email');

  useFocus(emailRef)

  useEffect(() => {
    isValidLogin && dispatch(loginAuth())
    isValidLogin && closeModal()
  }, [isValidLogin])

  const onSubmit = (data: ILoginData) => {
    dispatch(loginValidation(data))
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)} data-name='form-login'>

      <StyledHeader>
        Enter your username and password to login.
      </StyledHeader>

      <div>
        <StyledInput
          {...registerEmail}
          ref={(e) => {
            ref(e);
            emailRef.current = e;
          }}
          type='email'
          name='email'
          placeholder='Enter your email address'
        />
        {errors.email && <Warning message={errors.email.message} />}
      </div>

      <div>
        <StyledInput
          {...register('password')}
          type='password'
          name='password'
          placeholder='Password'
        />
        {errors.password && <Warning message={errors.password.message} />}
      </div>

      {error && <Warning message={error} />}

      <StyledButton link='#' >
        Forgot password?
      </StyledButton>

      <Button
        type='submit'
        style={{ width: '100%', height: '45px', marginBottom: '45px' }}
      >
        Login
      </Button>

      <HyphenText>
        Or login with
      </HyphenText>

    </StyledLoginForm>
  )
}

export default Login