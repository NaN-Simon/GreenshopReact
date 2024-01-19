/* eslint-disable  */
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../UI/button/Button'
import theme from '../../theme/theme'
import { ReactComponent as FindSVG } from '../../assets/svg/find.svg'
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg'
import { ReactComponent as LoginSVG } from '../../assets/svg/login.svg'
import Input from '../UI/input/Input'

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 30px;
`
const StyledFind = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const UserNav = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const ref = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(inputValue)
  }

  const handleOnClickFind = (event: React.MouseEvent) => {
    isHidden === true && setIsHidden(false)
    inputValue !== '' && handleSubmit(event)
  }

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsHidden(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [])

  return (
    <StyledNav>
      <StyledFind onSubmit={handleSubmit}>
        <Input
          ref={ref}
          value={inputValue}
          setValue={setInputValue}
          type="text"
          isHidden={isHidden}
          style={{
            width: '185px',
            height: '30px',
            borderRadius: '20px',
          }}
          name="find"
          placeholder="Enter"
        />
        <FindSVG onClick={handleOnClickFind} style={{ cursor: 'pointer' }} />
      </StyledFind>
      <CartSVG fill='#3D3D3D'/>
      <Button>
        <LoginSVG />
        <span>Login</span>
      </Button>
    </StyledNav>
  )
}

export default UserNav
