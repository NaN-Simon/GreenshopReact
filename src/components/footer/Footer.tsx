import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

import Divider from '../UI/divider/Divider';
import Feedback from '../feedback/Feedback';
import FooterContact from './FooterContact';
import FooterInfoCard from './FooterInfoCard';
import FooterLinks from './FooterLinks';

import theme from '../../theme/theme';

import { RootState } from '../../store/store';

import { IFooterInfoCardBlock } from '../../types/footer';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    max-width: 1200px;
  }
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
  /* data fetching */
  const { error, isLoading, footerInfoCard, footerContact, footerLink } = useSelector((state: RootState) => state.footerReducer)

  return (
    <StyledFooter data-name='footer'>

      {error && error}
      {isLoading && <span>Loading...</span>}

      {/* 1 line */}
      <StyledDescriptionAndFeedback>
        <StyledDescription>
          {footerInfoCard !== null && footerInfoCard.map((card: IFooterInfoCardBlock, index) => (
            <div key={card.id} style={{ display: 'flex' }}>
              <FooterInfoCard  {...card} />
              {index + 1 !== footerInfoCard.length && (
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
      {footerContact !== null && <FooterContact {...footerContact} />}

      {/* 3 line */}
      {footerLink !== null && <FooterLinks footerLink={footerLink} />}

      {/* 4 line */}
      <StyledCopyright>
        <span>© 2021 GreenShop. All Rights Reserved.</span>
        <StyledLink href="https://nan-simon.github.io/resume/">made by NaN-Simon</StyledLink>
      </StyledCopyright>
    </StyledFooter>
  )
}

export default Footer