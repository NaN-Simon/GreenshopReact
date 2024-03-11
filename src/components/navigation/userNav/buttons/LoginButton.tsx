/*
* В компоненте используются следующие основные элементы:
*
* 1. LoginButton - стилизованный функциональный компонент, который принимает пропсы isAuthorized
* (флаг авторизации пользователя) и authData (данные авторизации) и отображает кнопку.
* 2. StyledPopup - стилизованный Popup компонента, который содержит модальное окно.
* 3. Button - кнопка, которая содержит иконку и текст с условием. И триггерит открытие модального окна.
* Если пользователь авторизован отображается имя пользователя, если нет текст "Login"
* 4. AuthModal - компонент формы авторизации, который отображается в модальном окне при клике на кнопку.
* SettingsModal - компонент настроек пользователя.
* AuthModal/SettingsModal - отображаются в зависимости от статуса авторизации
*/

import React, { FC } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { PopupActions } from 'reactjs-popup/dist/types'

import AuthModal from '../../../modal/AuthModal'
import SettingsModal from '../../../modal/SettingsModal'

import Button from '../../../UI/button/Button'

import theme from '../../../../theme/theme'

import { ReactComponent as LoginSVG } from '../../../../assets/svg/login.svg'

import { IRegisterData } from '../../../../types/auth'

interface ILoginButton {
  isAuthorized: boolean,
  authData?: IRegisterData | null
}

const StyledLoginButton = styled.div`
  display: block;
  @media (max-width: ${theme.breakpoints.devices.sm}) {
  display: none
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

const LoginButton: FC<ILoginButton> = ({ isAuthorized, authData }) => {
  const popupRef = React.createRef<PopupActions>();

  const closePopup = () => {
    popupRef.current?.close()
  }

  return (
    <StyledLoginButton>
      <StyledPopup
        ref={popupRef}
        modal
        trigger={(
          <Button className="button">
            {(isAuthorized && authData) ? authData.username : (
              <div
                data-name='login-btn'
                style={{ display: 'flex', gap: '5px' }}
              >
                <LoginSVG />
                <span>Login</span>
              </div>
            )}
          </Button>
        )}
      >
        {isAuthorized
          ? <SettingsModal closeHandler={closePopup} />
          : <AuthModal closeHandler={closePopup} />}
      </StyledPopup>

    </StyledLoginButton>
  )
}

export default LoginButton