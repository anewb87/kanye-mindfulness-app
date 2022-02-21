import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { MoodContext } from "../Contexts/MoodContext";
import setImages from "../Utilities/SetImages";

const MoodCard = () => {
  
    const { mood } = useContext(UserContext);
   
    const moods = mood.map((feeling) => {
      return (
        <article key={feeling.id}>
          <h2>{feeling.date}</h2>
          <p>{setImages(feeling.mood)}</p>
        </article>
      )
    });
  
    return (
      <>
        {moods}
      </>
    )
  }

export default MoodCard;