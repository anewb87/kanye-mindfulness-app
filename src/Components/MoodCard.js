import React, { useContext } from "react";
import { MoodContext } from "../Contexts/MoodContext";

const MoodCard = () => {
  
    const { mood } = useContext(MoodContext);
   
    const moods = mood.map((feeling) => {
      return (
        <article key={feeling.id}>
          <h2>{feeling.date}</h2>
          <p>{feeling.todaysMood}</p>
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