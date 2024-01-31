import { useState, useLayoutEffect } from 'react';
import theme from '../theme/theme';

function useWindowSize() {
 const [size, setSize] = useState(window.innerWidth);
 const [isScreenLessThanMd, setIsScreenLessThanMd] = useState(
  window.innerWidth < theme.breakpoints.values.md
)
 useLayoutEffect(() => {
   function updateSize() {
     setSize(window.innerWidth);
     setIsScreenLessThanMd(window.innerWidth < theme.breakpoints.values.md)
   }

   window.addEventListener('resize', updateSize);
   updateSize();

   return () => window.removeEventListener('resize', updateSize);
 }, []);

 return {size, isScreenLessThanMd};
}

export default useWindowSize;
