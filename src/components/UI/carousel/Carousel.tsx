import React, { CSSProperties } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";

import Banner from '../../banner/Banner';
import Banner2 from '../../banner/Banner2';
import Banner3 from '../../banner/Banner3';

import theme from '../../../theme/theme';

import useWindowSize from '../../../hooks/useWindowSize';

/* для медиа-запроса theme.breakpoints.devices.xs
* размер width идет из кастомного хука, т.к width
* родительского компонента плагина Slider равна
* максимальной возможной width браузера */

interface ICarousel {
  className?: string,
  style?: CSSProperties,
  onClick?: () => void
}

const SamplePrevArrow = (props: ICarousel) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
const SampleNextArrow = (props: ICarousel) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};



const StyledWrapper = styled.div<{ $size: number; }>`
  @media (min-width: ${theme.breakpoints.devices.xs}) {
    width: ${props => props.$size ? `${props.$size - 50}px` : '100%'};
    max-width: ${theme.breakpoints.devices.sm};
  }
  @media (min-width: ${theme.breakpoints.devices.sm}) {
    width: ${theme.breakpoints.devices.sm};
    max-width: none;
  }

  @media (min-width: ${theme.breakpoints.devices.md}) {
    width: ${theme.breakpoints.devices.md};
    max-width: none;
  }

  @media (min-width: ${theme.breakpoints.devices.lg}) {
    width: ${theme.breakpoints.devices.lg};
    max-width: none;
  }

  @media (min-width: ${theme.breakpoints.devices.xl}) {
    width: ${theme.breakpoints.devices.xl};
    max-width: none;
  }
`
const StyledItem = styled.div`
  background-color: ${theme.palette.backgroundPrimary};
`

const Carousel = () => {
  const { size } = useWindowSize();

  return (
    <StyledWrapper $size={size} data-name='carousel'>
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