import React, { useContext } from "react";
import { JournalContext } from "../Contexts/JournalContext";

const Card = () => {
  
  const { journal } = useContext(JournalContext);
 
  const entries = journal.map((entry) => {
    return (
      <article key={entry.id}>
        <h2>{entry.date}</h2>
        <p>{entry.body}...</p>
      </article>
    )
  });

  return (
    <>
      {entries}
    </>
  )
}

export default Card