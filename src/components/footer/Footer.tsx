import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import InfoCard from '../card/InfoCard'
import Feedback from '../feedback/Feedback'
import { footerInfoCards } from '../../mock-data/footer-info-cards'
import { IInfoCard } from '../../types/infoCard';
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import Divider from '../UI/divider/Divider';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const StyledDescriptionAndFeedback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: ${theme.palette.backgroundSecondary};
`
const StyledDescription = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 780px;
  list-style-type: none;
  @media (max-width: ${theme.breakpoints.devices.md}) {
    flex-wrap: wrap;
 }
`
const StyledLink = styled.a`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
  transition: all 0.5s;
  &:hover{
    opacity: 0.7
  }
`
const StyledCopyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  @media (max-width: ${theme.breakpoints.devices.sm}) {
    flex-direction: column;
  }
`

const Footer = () => {
  return (
    <StyledFooter data-name='footer'>
      {/* 1 line */}
      <StyledDescriptionAndFeedback>
        <StyledDescription>
          {footerInfoCards.map((card: IInfoCard, index) => (
            <div key={card.id} style={{ display: 'flex' }}>
              <InfoCard  {...card} />
              {index + 1 !== footerInfoCards.length && (
                <Divider
                  style={{ height: '100%', background: '#46a3581a' }}
                />
              )}
            </div>
          ))}
        </StyledDescription>
        <Feedback />
      </StyledDescriptionAndFeedback>

      {/* 2 line */}
      <FooterContact />

      {/* 3 line */}
      <FooterLinks />

      {/* 4 line */}
      <StyledCopyright>
        <span>© 2021 GreenShop. All Rights Reserved.</span>
        <StyledLink href="https://nan-simon.github.io/resume/">made by NaN-Simon</StyledLink>
      </StyledCopyright>
    </StyledFooter>
  )
}

export default Footer