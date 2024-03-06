import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/button/Button'
import Warning from '../../components/common/Warning';
import HyphenText from '../../components/common/HyphenText'

import { validationSchema } from './schema';

import { IRegisterData } from './type';

import { AppDispatch } from '../../store/store';

import { setAuth } from '../../store/reducers/authSlice'

import theme from '../../theme/theme'

const StyledForm = styled.form`
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
  const dispatch = useDispatch<AppDispatch>()

  const usernameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);


  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { ref, ...registerUsername } = register('username');

  const onSubmit = (data: IRegisterData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirmation, ...newData } = data;
    dispatch(setAuth(newData))
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-name='form-register'>

      <StyledHeader>
        Enter your email and password to register.
      </StyledHeader>

      <div>
        <StyledInput
          {...registerUsername}
          ref={(e) => {
            ref(e);
            usernameRef.current = e;
          }}
          type='text'
          name='username'
          placeholder='Username'
        />
        {errors.username && <Warning message={errors.username.message} />}
      </div>

      <div>
        <StyledInput
          {...register('email')}
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

      <div>
        <StyledInput
          {...register('passwordConfirmation')}
          type='password'
          name='passwordConfirmation'
          placeholder='Confirm Password'
        />
        {errors.passwordConfirmation && <Warning message={errors.passwordConfirmation.message} />}
      </div>

      <Button type='submit' style={{ width: '100%', height: '45px' }}>
        Register
      </Button>

      <HyphenText>
        Or register with
      </HyphenText>

    </StyledForm>
  )
}

export default Register