import React, { RefObject, useEffect } from 'react'

const useFocus = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [])
  return ref
}

export default useFocus