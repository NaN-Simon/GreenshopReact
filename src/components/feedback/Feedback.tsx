import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

const StyledFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-width: 315px;
  max-width: 420px;
  height: 250px;
  padding: 0px 25px;
`

const StyledInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const StyledDescription = styled.p`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: 25px;
`

const Feedback = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(email)
    setEmail('')
  }

  return (
    <StyledFeedback>
      <StyledInputForm onSubmit={handleSubmit}>
        <Input
          value={email}
          setValue={setEmail}
          type='email'
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
          name='feedback'
          placeholder='enter your email address...'
        />
        <Button
          link='#'
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            height: '40px',
            fontWeight: 700
          }} >
          Join
        </Button>
      </StyledInputForm>
      <StyledDescription>
        We usually post offers and challenges in newsletter.
        We’re your online houseplant destination. We offer
        a wide range of houseplants and accessories shipped
        directly from our (green)house to yours!
      </StyledDescription>
    </StyledFeedback>
  )
}

export default Feedback