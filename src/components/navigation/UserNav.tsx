import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import MenuSmallScreen from '../../module/MenuSmallScreen'

import Button from '../UI/button/Button'
import Input from '../UI/input/Input'

import { ReactComponent as FindSVG } from '../../assets/svg/find.svg'
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg'
import { ReactComponent as LoginSVG } from '../../assets/svg/login.svg'
import { ReactComponent as ListSVG } from '../../assets/svg/list.svg'

import theme from '../../theme/theme'
import Auth from '../modal/Auth';
import { PopupActions } from 'reactjs-popup/dist/types';

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
const StyledPopup = styled(Popup)`
  &-content{
    width: auto;
    padding: 0;
    margin: 0;
    border: none;
  }
 `


const UserNav = () => {
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [])

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

  /* Popup on Button Login */
  const popupRef = React.createRef<PopupActions>();

  const closePopup = () => {
    popupRef.current?.close()
  }


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

      <StyledPopup
        ref={popupRef}
        modal
        trigger={(
          <Button className="button">
            <LoginSVG />
            <span>Login</span>
          </Button>
        )}
      >
        <Auth closeHandler={closePopup} />
      </StyledPopup>

    </StyledNav>
  )
}

export default UserNav
