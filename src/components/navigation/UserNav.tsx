import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import MenuSmallScreen from '../../module/MenuSmallScreen'

import Button from '../UI/button/Button'
import Input from '../UI/input/Input'

import { ReactComponent as FindSVG } from '../../assets/svg/find.svg'
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg'
import { ReactComponent as LoginSVG } from '../../assets/svg/login.svg'
import { ReactComponent as ListSVG } from '../../assets/svg/list.svg'

import theme from '../../theme/theme'

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`
const StyledFind = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const StyledListSVGWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    display: none;
 }
`

const UserNav = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)
  const refBurgerMenu = useRef<HTMLDivElement>(null);
  const refBurgerButton = useRef<HTMLDivElement>(null);

  /* Find input */
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

  /* SmallScreenMenu */
  const handleClickOutsideBurgerMenu = (event: any) => {
    if (refBurgerMenu.current &&
      !refBurgerMenu.current.contains(event.target) &&
      !refBurgerButton.current?.contains(event.target)) {
      setDisplayBurgerMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideBurgerMenu, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideBurgerMenu, true);
    }
  }, []);

  return (
    <StyledNav>
      {displayBurgerMenu && <div ref={refBurgerMenu}><MenuSmallScreen /></div>}

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

      <StyledListSVGWrapper
        ref={refBurgerButton}
        onClick={() => {
          setDisplayBurgerMenu(!displayBurgerMenu)
        }}
      >
        <ListSVG />
      </StyledListSVGWrapper>

      <CartSVG fill='#3D3D3D' />

      <Button link='#'>
        <LoginSVG />
        <span>Login</span>
      </Button>
      
    </StyledNav>
  )
}

export default UserNav
