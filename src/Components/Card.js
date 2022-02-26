import React from "react";
import './Card.scss'


const Card = ({ date, body, id }) => {
  return (
    <article className='journal-card scrollbar' key={id}>
      <h3>{date}</h3>
      <p>{body}</p>
    </article>
  )
}


export default Card;