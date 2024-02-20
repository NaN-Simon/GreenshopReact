import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: {children: ReactElement<any, any>}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,  0);
  }, [location]);

  return children ?? null;
};

export default ScrollToTop;
