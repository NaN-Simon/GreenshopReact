import React, { FC } from 'react'
import Button from '../UI/button/Button';

interface ICounter {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const Counter: FC<ICounter> = ({ value, setValue }) => {
  const MAX_INCREMENT = 99

  const decrement = (v: number) => {
    v > 0 && setValue(count => count - 1)
  }

  const increment = (v: number) => {
    v < MAX_INCREMENT && setValue(count => count + 1)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
      <Button
        style={{ width: '33px', borderRadius: '50%', fontSize: '30px' }}
        onClick={() => { decrement(value) }}
      >-</Button>
      {value}
      <Button
        style={{ width: '33px', borderRadius: '50%', fontSize: '30px' }}
        onClick={() => { increment(value) }}
      >+</Button>
    </div>
  )
}

export default Counter