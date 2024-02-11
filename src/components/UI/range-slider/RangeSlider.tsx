import React, { FC } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import styled from 'styled-components'
import theme from '../../../theme/theme';
import Button from '../button/Button';

interface IRangeSlider {
  min: number
  max: number
  value: number | number[]
  setValue: React.Dispatch<React.SetStateAction<number | number[]>>;
  header?: string,
  initialPrice: number | number[]
  buttonSubmit: () => void,
}

const StyledRangeSlider = styled.div`
  padding: 20px 18px;
  background: ${theme.palette.backgroundSecondary};
`
const StyledWrapper = styled.div`
  padding: 17px 46px 14px 10px;
`

const StyledHeader = styled.h3`
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledPrice = styled.h5`
  padding: 3px 2px 9px 2px;
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  & span{
    color: ${theme.palette.info};
    font-weight: 700
  }
`

const rangeSliderCustomStyles = {
  track: {
    top: '8px',
    background: theme.palette.info,
  },
  handle: {
    background: theme.palette.info,
    border: `3px solid ${theme.palette.backgroundSecondary}`,
    width: 20,
    height: 20,
  },
  rail: {
    top: '8px',
    background: `${theme.palette.info}33`,
  }
}

const RangeSlider: FC<IRangeSlider> = ({ min, max, value, setValue, header, initialPrice, buttonSubmit }) => {

  return (
    <StyledRangeSlider data-name='range-slider'>
      <StyledHeader data-name='range-slider-header'>
        {header}
      </StyledHeader>
      <StyledWrapper data-name='range-slider-wrapper'>
        <Slider
          range
          min={min}
          max={max}
          defaultValue={initialPrice}
          allowCross={false}
          onChange={setValue}
          style={{ height: '23px' }}
          styles={rangeSliderCustomStyles}
          handleRender={(node, handleProps) => {
            return (
              <Tooltip
                overlayInnerStyle={{ minHeight: "auto" }}
                overlay={"Price: " + handleProps.value}
                placement="top"
              >
                {node}
              </Tooltip>
            );
          }}
        />
        <StyledPrice data-name='range-slider-price'>
          Price: <span> ${Array.isArray(value) && value.join(" - $")} </span>
        </StyledPrice>
        <Button onClick={buttonSubmit} link='#' style={{ width: '90px', fontWeight: '700' }}>
          Filter
        </Button>
      </StyledWrapper>
    </StyledRangeSlider>
  )
}

export default RangeSlider