import React, { FC, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import styled from 'styled-components'
import theme from '../../../theme/theme';

interface IRangeSlider {
  header?: string,
  initialPrice: number | number[]
}

const StyledWrapper = styled.div`
  background: ${theme.palette.testBox};
  padding: 30px;
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
    background: theme.palette.info,
  },
  handle: {
    background: theme.palette.info,
    border: `3px solid ${theme.palette.backgroundSecondary}`,
    width: 15,
    height: 15
  },
  rail: {
    background: `${theme.palette.info}33`
  }
}

const RangeSlider: FC<IRangeSlider> = ({ header, initialPrice }) => {
  const [value, setValue] = useState<number | number[]>(initialPrice)
  return (
    <div>
      <StyledHeader>
        {header}
      </StyledHeader>
      <StyledWrapper>
        <Slider
          range
          min={39}
          max={2000}
          defaultValue={initialPrice}
          allowCross={false}
          onChange={setValue}
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
        <StyledPrice>
          Price: <span>
            ${Array.isArray(value) && value.join(" - $")}
          </span>
        </StyledPrice>
      </StyledWrapper>
    </div>
  )
}

export default RangeSlider