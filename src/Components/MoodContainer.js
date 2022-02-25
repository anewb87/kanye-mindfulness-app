import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import MoodCard from "./MoodCard";
import './MoodContainer.scss'

const MoodContainer = () => {

    const { mood } = useContext(UserContext);

    const moodEntries = mood.map((feeling) => {
      return (
          <MoodCard 
            key={feeling.id}
            date={feeling.date}
            mood={feeling.mood}
          />
      )
    })
    return (
        <section className='mood-container'>
            {moodEntries}
        </section>
    )
}

export default  MoodContainer;