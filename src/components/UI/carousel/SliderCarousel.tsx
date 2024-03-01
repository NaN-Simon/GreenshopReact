import React, { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";

import theme from '../../../theme/theme';

import useWindowSize from '../../../hooks/useWindowSize';

/* для медиа-запроса theme.breakpoints.devices.xs
* размер width идет из кастомного хука, т.к width
* родительского компонента плагина Slider равна
* максимальной возможной width браузера */
interface ISliderCarousel {
  children: ReactNode;
  slidesToShow?: number
  slidesToScroll?: number,
  dots?: boolean,
  infinite?: boolean,
  autoplay?: boolean,
  speed?: number
}

interface ICarouselArrow {
  className?: string,
  style?: CSSProperties,
  onClick?: () => void
}

const SamplePrevArrow = (props: ICarouselArrow) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
const SampleNextArrow = (props: ICarouselArrow) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

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
    max-width: ${theme.breakpoints.devices.md};
  }

  @media (min-width: ${theme.breakpoints.devices.lg}) {
    width: ${theme.breakpoints.devices.lg};
    max-width: 1200px;
  }

  @media (min-width: ${theme.breakpoints.devices.xl}) {
    width: ${theme.breakpoints.devices.xl};
    max-width: 1200px;
  }
`

const SliderCarousel: FC<ISliderCarousel> = (props) => {
  const { children, slidesToShow = 1, slidesToScroll = 1, dots = true, infinite = true, autoplay = false, speed = 1000 } = props
  const { size } = useWindowSize();

  return (
    <StyledWrapper $size={size} data-name='carousel'>
      <Slider
        dots={dots}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        lazyLoad='progressive'
        swipeToSlide={true}
        infinite={infinite}
        autoplay={autoplay}
        speed={speed}
        prevArrow={<SamplePrevArrow />}
        nextArrow={<SampleNextArrow />}
        // beforeChange={(event) => { console.log(event) }}
        // afterChange={() => { console.log('afterChange') }}
        // beforeChange={(current, next) => {
        //   // const event = { stopPropagation: () => console.log('Stop Propagation called') };
        //   // event.stopPropagation();
        //   console.log(event);
        // }}
      >
        {children}
      </Slider>
    </StyledWrapper>
  )
}

export default SliderCarousel