import React, { FC, useMemo, useState } from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme'
import { ICard } from '../../../types/card'
import { getParagraph, getRandom } from '../../../utils/random'
import Button from '../../UI/button/Button'
import { ReactComponent as HeartSVG } from '../../../assets/svg/heart.svg'

import Counter from '../../common/Counter'
import Textbox from './UI/textbox/Textbox'
import RadioSize from './UI/radio/RadioSize'
import SocialLinks from './widgets/SocialLinks'
import Price from './widgets/Price'
import Rate from './widgets/Rate'

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  /* background: ${theme.palette.testBox} */
`
const StyledName = styled.h2`
  color: ${theme.typography.h2.color};
  font-family: ${theme.typography.h2.fontFamily};
  font-style: ${theme.typography.h2.fontStyle};
  font-weight: ${theme.typography.h2.fontWeight};
  font-size: ${theme.typography.h2.fontSize};
  line-height: ${theme.typography.h2.lineHeight};
`
const StyledPriceRate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 0.3px solid ${theme.palette.info}7e;
`
const StyledGroupButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 15px;
`
const StyledButton = styled(Button)`
  min-width: 130px;
  height: 40px;
  border: 1px solid ${theme.palette.info};
  font-weight: 700;
`
const StyledDetailInfo = styled.h5`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  color: ${theme.palette.secondary};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};

`

const Details: FC<ICard> = (props) => {
  const { name, category, size, price, currency, prevPrice, tags, rate, countReview } = props
  const mockParagraph = useMemo(() => { return getParagraph(2, 3) }, [])
  const mockSKU = useMemo(() => { return '199' + getRandom(1000000000, 1999999999) }, [])

  /* counter */
  const [count, setCount] = useState(0)

  return (
    <StyledDetails data-name='details'>

      <StyledName>{name}</StyledName>

      <StyledPriceRate>
        <Price currency={currency} price={price} prevPrice={prevPrice} />
        <Rate rate={rate} countReview={countReview} />
      </StyledPriceRate>

      <Textbox style={{ paddingBottom: '20px' }} header='Short Description:'>
        {mockParagraph}
      </Textbox>

      <RadioSize style={{ paddingBottom: '20px' }} value={size} />

      <StyledGroupButton>
        <Counter value={count} setValue={setCount} />
        <StyledButton
          onClick={() => { console.log('BUY NOW') }}
          style={{ width: '130px', height: '40px', fontWeight: 700 }}>BUY NOW</StyledButton>
        <StyledButton
          onClick={() => { console.log('ADD TO CARD') }}
          style={{ background: 'none', color: theme.palette.info }}>ADD TO CARD</StyledButton>
        <StyledButton
          onClick={() => { console.log('HeartSVG') }}
          style={{
            minWidth: 'auto',
            width: '40px',
            background: 'none',
            color: theme.palette.info,
          }}>
          <HeartSVG fill={theme.palette.info} />
        </StyledButton>
      </StyledGroupButton>

      <StyledDetailInfo>
        <span>SKU: {mockSKU}</span>
        <span>Category: {category}</span>
        <span>Tags: {tags?.join(", ")}</span>
      </StyledDetailInfo>

      <SocialLinks header='Share this products:' />
    </StyledDetails>
  )
}

export default Details