import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import setImages from "../Utilities/SetImages";

const MoodCard = ({ id, date, mood }) => {

return (
  <article key={id} data-testid='mood-card'>
    <h4>{date}</h4>
    {setImages(mood)}
  </article>
  )
}

export default MoodCard;
