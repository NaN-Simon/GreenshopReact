import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import InfoCard from '../card/InfoCard'
import Feedback from '../feedback/Feedback'
import { footerInfoCards } from '../../mock-data/footer-info-cards'
import { IInfoCard } from '../../types/infoCard';
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${theme.palette.testBox};
  `
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
          {footerInfoCards.map((card: IInfoCard) => (
            <InfoCard key={card.id} {...card} />
          ))}
        <Feedback />
      </StyledUl>
      <div style={{width: '100%'}}>
        <FooterContact />
      </div>

        <FooterLinks/>

      <span>© 2021 GreenShop. All Rights Reserved.</span>
    </StyledFooter>
  )
}

export default Footer