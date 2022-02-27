import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import './Card.scss';
// import deleteJournalEntry from '../apiCall';


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
      <h3>{date}</h3>
      <p>{body}</p>
      <button onClick={() => deleteEntry(id)}></button>
    </article>
  )
}


export default Card;