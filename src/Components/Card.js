import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import './Card.scss'


const Card = ({ date, body, id }) => {
  return (
    <article className='journal-card' key={id}>
      <h3>{date}</h3>
      <p>{body}</p>
    </article>
  )
}


export default Card;