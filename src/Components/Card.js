import React from "react";
import './Card.scss'


const Card = ({ date, body, id }) => {
  return (
    <article className='journal-card scrollbar' key={id}>
      <p className='date'>{date}</p>
      <p>{body}</p>
    </article>
  )
}


export default Card;