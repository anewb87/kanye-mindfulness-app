import React, { useEffect, useState } from "react";

const Delayed = ({ children, waitBeforeShow = 1500 }: Props) => {
    const [isShown, setIsShown] = useState(false);
  
    useEffect(() => {
  
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);
  
    return isShown ? children : null;
  };
  
  export default Delayed;