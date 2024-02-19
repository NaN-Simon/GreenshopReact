import React, { FC } from 'react'
import { IRateOfCard } from '../../../../types/card'
import RadioRate from '../UI/radio/RadioRate'

const Rate: FC<IRateOfCard> = ({ rate, countReview }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
      <RadioRate rate={rate} />
      <div> {countReview} Customer Review</div>
    </div>
  )
}

export default Rate