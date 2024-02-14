import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme'

const StyledAlbumCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  background: ${theme.palette.testBox}
`
const AlbumCarousel = () => {
  return (
    <StyledAlbumCarousel data-name='album-carousel'>
      AlbumCarousel
    </StyledAlbumCarousel>
  )
}

export default AlbumCarousel