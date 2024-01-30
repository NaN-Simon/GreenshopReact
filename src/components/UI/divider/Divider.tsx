import React, { CSSProperties, FC } from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme'

interface IDivider {
  style?: CSSProperties;
}

const StyledDivider = styled.div`
  width: 0.07rem;
  height: 0.6rem;
  background: ${theme.palette.primary};
`

const Divider: FC<IDivider> = ({ style }) => {
  return (
    <StyledDivider style={{ ...style }} />
  )
}

export default Divider