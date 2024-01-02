import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../UI/button/Button';
import theme from '../../theme/theme';
import { ReactComponent as FindSVG } from '../../assets/svg/find.svg';
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg';
import { ReactComponent as LoginSVG } from '../../assets/svg/login.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: ${theme.palette.testBox}
`

const UserNav = () => {
  return (
    <StyledNav>
      <FindSVG />
      <CartSVG />
      <Button>
        <LoginSVG />
        <span>
          Login
        </span>
      </Button>
    </StyledNav>
  )
}

export default UserNav