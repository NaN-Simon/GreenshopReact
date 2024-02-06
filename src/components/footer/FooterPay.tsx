import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme';
import paySystems from '../../assets/image/paySystems.png';


const StyledFooterHeader = styled.h3`
font-family: ${theme.typography.h3.fontFamily};
font-style: ${theme.typography.h3.fontStyle};
font-weight: 700;
font-size: ${theme.typography.h3.fontSize};
line-height: ${theme.typography.h3.lineHeight};
`

const FooterPay = () => {
  return (
    <div data-name='footer-pay'>
      <StyledFooterHeader>
        We accept
      </StyledFooterHeader>
      <img src={paySystems} alt="paySystems" />

    </div>
  )
}

export default FooterPay