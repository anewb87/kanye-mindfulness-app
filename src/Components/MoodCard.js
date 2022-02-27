import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import setImages from "../Utilities/SetImages";

const MoodCard = ({ id, date, mood, time }) => {
return (
  <article key={id} className='mood-card' data-testid='mood-card'>
    <p>{date}</p>
    <p>{time}</p>
    {setImages(mood)}
  </article>
  )
}

export default MoodCard;
