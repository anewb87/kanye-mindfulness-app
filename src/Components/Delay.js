import React, { useEffect, useState } from "react";

const Delayed = ({ children, waitBeforeShow = 3000 }: Props) => {
    const [isShown, setIsShown] = useState(false);
  
    useEffect(() => {
      console.log(waitBeforeShow);
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);
  
    return isShown ? children : null;
  };
  
  export default Delayed;