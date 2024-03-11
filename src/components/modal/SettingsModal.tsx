import React, { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { useDispatch } from 'react-redux'

import Button from '../UI/button/Button'

import { AppDispatch } from '../../store/store'

import { removeAuth } from '../../store/reducers/authSlice'

import { ReactComponent as CloseSVG } from '../../assets/svg/close.svg'

interface UserSettings {
  closeHandler: () => void,
}

const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 50px 0px 58px 0px;
  width: 220px;
  height: 270px;
  border-bottom: 10px solid ${theme.palette.info};
  @media (max-width: ${theme.breakpoints.devices.sm}) {
    width: 100%;
    padding: 20px;
 }
`
const StyledCloseSVG = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 13px;
  cursor: pointer;
`

const UserSettings: FC<UserSettings> = ({ closeHandler }) => {
  const dispatch = useDispatch<AppDispatch>()

  const logoutHandler = () => {
    dispatch(removeAuth())
    closeHandler()
  }
  return (
    <StyledAuth data-name='auth'>

      <StyledCloseSVG onClick={closeHandler}>
        <CloseSVG />
      </StyledCloseSVG>

      <Button onClick={logoutHandler}>
        Logout
      </Button>


    </StyledAuth>
  )
}

export default UserSettings