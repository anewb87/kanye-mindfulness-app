import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import './Card.scss';
import deleteBtn from '../Assets/close.png'


const Card = ({ date, body, id, deleteJournalEntry }) => {
  const { journal, setJournal } = useContext(UserContext)

  const filterEntries = (id) => {
    const filteredJournal = journal.filter(entry =>  entry.id !== id);
    setJournal(filteredJournal)
  }

  const deleteEntry = (id) => {
    deleteJournalEntry(id)
    .then(response => filterEntries(id))
    .catch(err => console.log(err))
  }

  return (
    <article className='journal-card scrollbar' key={id}>
        <button className='delete-btn' onClick={() => deleteEntry(id)}>
          <img src={deleteBtn} alt="Delete button"/>
        </button>
      <p className='date'>{date}</p>
      <p>{body}</p>
    </article>
  )
}


export default Card;