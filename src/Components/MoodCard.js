import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { MoodContext } from "../Contexts/MoodContext";
import setImages from "../Utilities/SetImages";

const MoodCard = () => {
  
    const { user } = useContext(UserContext);
    // console.log(user)
   
    const moods = user.moods.map((feeling) => {
      return (
        <article key={feeling.id}>
          <h2>{feeling.date}</h2>
          <p>{setImages(feeling.todaysMood)}</p>
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