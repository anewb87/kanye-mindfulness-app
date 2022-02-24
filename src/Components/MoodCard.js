import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import setImages from "../Utilities/SetImages";

const MoodCard = () => {

    const { mood } = useContext(UserContext);

    const moods = mood.map((feeling) => {
      return (
        <article key={feeling.id} data-testid='mood-card'>
          <h2>{feeling.date}</h2>
          {setImages(feeling.mood)}
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
