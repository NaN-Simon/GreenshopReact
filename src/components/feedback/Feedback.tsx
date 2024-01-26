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
  width: 380px;
  height: 250px;
  padding: 0px 25px 0px 0px;
  background: #C3C2C2;
`

const StyledInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
        <Button link='#' style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: '40px' }} >
          Join
        </Button>
      </StyledInputForm>
      <p>
        We usually post offers and challenges in newsletter.
        We’re your online houseplant destination. We offer
        a wide range of houseplants and accessories shipped
        directly from our (green)house to yours!
      </p>
    </StyledFeedback>
  )
}

export default Feedback