import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

import useClickOutside from '../../../hooks/useClickOutside';

import MenuSmallScreen from '../../../module/MenuSmallScreen'

import LoginButton from './buttons/LoginButton';

import Input from '../../UI/input/Input'

import { RootState } from '../../../store/store';

import { ReactComponent as FindSVG } from '../../../assets/svg/find.svg'
import { ReactComponent as CartSVG } from '../../../assets/svg/cart.svg'
import { ReactComponent as ListSVG } from '../../../assets/svg/list.svg'

import theme from '../../../theme/theme'

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
  const { isAuthorized, authData, status } = useSelector((state: RootState) => state.authReducer)
  /* Find input */
  const refInputFind = useRef<HTMLInputElement | null>(null)

  const [isHiddenInputFind, setIsHiddenInputFind] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(inputValue)
  }

  const handleOnClickFind = (event: React.MouseEvent) => {
    isHiddenInputFind === true && setIsHiddenInputFind(false)
    inputValue !== '' && handleSubmit(event)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (refInputFind.current && !refInputFind.current.contains(event.target as Node)) {
      setIsHiddenInputFind(true)
    }
  }

  useClickOutside(handleClickOutside)

  /* SmallScreenMenu */
  const refBurgerMenu = useRef<HTMLDivElement>(null);
  const refBurgerButton = useRef<HTMLDivElement>(null);

  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)

  const handleClickOutsideBurgerMenu = (event: MouseEvent) => {
    if (refBurgerMenu.current &&
      !refBurgerMenu.current.contains(event.target as Node) &&
      !refBurgerButton.current?.contains(event.target as Node)) {
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
          ref={refInputFind}
          value={inputValue}
          setValue={setInputValue}
          type="text"
          isHidden={isHiddenInputFind}
          style={{
            width: '185px',
            height: '30px',
            borderRadius: '20px',
          }}
          name="find"
          placeholder="Enter"
        />
        <FindSVG
          onClick={handleOnClickFind}
          style={{ cursor: 'pointer' }}
        />

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

      {status === 'resolved' && (
        <LoginButton
          authData={authData}
          isAuthorized={isAuthorized}
        />)}

    </StyledNav>
  )
}

export default UserNav
