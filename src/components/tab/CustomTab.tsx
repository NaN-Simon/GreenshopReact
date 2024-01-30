import React, { FC, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'
import theme from '../../theme/theme';
import 'react-tabs/style/react-tabs.css';

interface ICustomTab {
  handler: (tab: number) => void,
}

const StyledTabs = styled(Tabs)`
`
const StyledTabList = styled(TabList)`
  display: flex;
  align-items: center;
  gap: 37px
`
const StyledTab = styled(Tab)`
  padding: 0 5px 3px 5px;
  border-radius: 0;
  list-style: none;
  outline: none;
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  cursor: pointer;
  transition: border 0.7s;
  &.react-tabs__tab--selected {
    border-bottom: 2px solid ${theme.palette.info};
    background: transparent;
    color: ${theme.palette.info};
    font-weight: 700;
  }
`

const CustomTab:FC<ICustomTab> = ({handler}) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <StyledTabs
      selectedIndex={tabIndex}
      onSelect={(index) => {
        setTabIndex(index)
        handler(index)}
      }>
      <StyledTabList>
        <StyledTab>All Plants</StyledTab>
        <StyledTab>New Arrivals</StyledTab>
        <StyledTab>Sale</StyledTab>
      </StyledTabList>

      <TabPanel>
      </TabPanel>
      <TabPanel>
      </TabPanel>
      <TabPanel>
      </TabPanel>
    </StyledTabs>
  )
}

export default CustomTab