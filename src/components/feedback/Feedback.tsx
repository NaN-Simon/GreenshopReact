import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import Button from '../UI/button/Button';

const StyledFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 355px;
  height: 250px;
  padding: 1px 30px 1px 25px;
  background: #C3C2C2;
`

const StyledInputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Feedback = () => {
  return (
    <StyledFeedback>
      <StyledInputForm>
        <input type="text" name="" id="" />
        <Button styles={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} >
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