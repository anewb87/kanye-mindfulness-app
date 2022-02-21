import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const Card = () => {
  
  const { journal } = useContext(UserContext);
 
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