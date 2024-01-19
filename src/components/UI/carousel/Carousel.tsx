import React from 'react'
import Slider from "react-slick";
import Banner from '../../banner/Banner';
import Banner2 from '../../banner/Banner2';
import Banner3 from '../../banner/Banner3';
import styled from 'styled-components';
import theme from '../../../theme/theme';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const StyledWrapper = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoints.devices.sm}) {
  width: ${theme.breakpoints.devices.sm};
  }

  @media (min-width: ${theme.breakpoints.devices.md}) {
  width: ${theme.breakpoints.devices.md};
  }

  @media (min-width: ${theme.breakpoints.devices.lg}) {
  width: ${theme.breakpoints.devices.lg};
  }

  @media (min-width: ${theme.breakpoints.devices.xl}) {
  width: 1200px;
  }
`
const StyledItem = styled.div`
  display: flex!important;
  justify-content: center!important;
  background-color: ${theme.palette.backgroundPrimary};
`

const Carousel = () => {
  return (
    <StyledWrapper>
      <Slider {...settings}>
        <StyledItem data-name='carousel-item-1'>
          <Banner />
        </StyledItem>
        <StyledItem data-name='carousel-item-2'>
          <Banner2 />
        </StyledItem>
        <StyledItem data-name='carousel-item-3'>
          <Banner3 />
        </StyledItem>
      </Slider>
    </StyledWrapper>
  )
}

export default Carousel