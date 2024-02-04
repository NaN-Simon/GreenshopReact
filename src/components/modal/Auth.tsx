import React, { FC, MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Login from '../../forms/Login'
import Register from '../../forms/Register'
import Button from '../UI/button/Button'

import Divider from '../UI/divider/Divider'

import { ReactComponent as FacebookSVG } from '../../assets/svg/facebook.svg';
import { ReactComponent as GoogleSVG } from '../../assets/svg/google.svg';
import { ReactComponent as CloseSVG } from '../../assets/svg/close.svg'

interface IAuth {
  closeHandler: MouseEventHandler<HTMLDivElement>,
}

const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 50px 0px 58px 0px;
  width: 500px;
  height: 600px;
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
const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 27px;
`
const StyledTabList = styled(TabList)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 35px;
`
const StyledTab = styled(Tab)`
  padding: 0 5px 3px 5px;
  border-radius: 0;
  list-style: none;
  outline: none;
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 600;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
  cursor: pointer;
  transition: color 0.7s;
  &.react-tabs__tab--selected {
    background: transparent;
    color: ${theme.palette.info};
    font-weight: 700;
  }
`
const StyledButton = styled(Button)`
  display: flex;
  gap: 10px;
  width: 300px;
  height: 40px;
  background: none;
  color: ${theme.palette.secondary};
  border: 1px solid #eaeaea;
`

const Auth:FC<IAuth> = ({closeHandler}) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <StyledAuth data-name='auth'>

    <StyledCloseSVG onClick={closeHandler}>
    <CloseSVG/>
    </StyledCloseSVG>


      <StyledTabs data-name='auth-tabs'
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index)
        }
        }>
        <StyledTabList>
          <StyledTab>Login</StyledTab>
          <Divider style={{ height: '1.1rem' }} />
          <StyledTab>Register</StyledTab>
        </StyledTabList>

        <TabPanel>
          <Login />
        </TabPanel>
        <TabPanel>
          <Register />
        </TabPanel>
      </StyledTabs>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        <StyledButton >
          <GoogleSVG />
          <span>Login with Google</span>
        </StyledButton>

        <StyledButton style={{ width: '300px', height: '40px' }}>
          <FacebookSVG fill='#3B5999' />
          <span>Login with Facebook</span>
        </StyledButton>

      </div>


    </StyledAuth>
  )
}

export default Auth