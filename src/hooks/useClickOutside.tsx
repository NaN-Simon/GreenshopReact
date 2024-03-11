import React, { useEffect } from 'react'

const useClickOutside = (handleClickOutside : (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [])
  return handleClickOutside
}

export default useClickOutside