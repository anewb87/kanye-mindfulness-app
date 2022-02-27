import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import Card from './Card';
import './JournalContainer.scss';
import { deleteJournalEntry } from '../apiCall';


const JournalContainer = () => {
    const { journal } = useContext(UserContext);

    const entries = journal.map(entry => {
        return ( 
            <Card 
                date={entry.date}
                body={entry.body}
                key={entry.id}
                id={entry.id}
                deleteJournalEntry={deleteJournalEntry}
            />
        )
    });

    const checkJournals = () => {
        if (entries.length) {
            return (
                <section className='journal-container' data-testid='journal-container'>
                    {entries}
                </section>
            )
        }
        return (
            <>
                <h2 className='no-entries'>No entries yet. Try exploring your thoughts and feelings, and write them down.</h2>
            </>
        )
    }
    
    return (
    <>
        {checkJournals()}
    </>
    )
}

export default JournalContainer;