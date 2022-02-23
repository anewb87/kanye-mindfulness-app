import React, { useContext, useState } from 'react';
import './JournalPage.scss'
import { QuoteContext } from '../../Contexts/QuoteContext';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { createDate } from '../../Utilities/Date';
import { updateUser } from '../../apiCall';

const JournalPage = () => {
    
    const [currentJournal, setCurrentJournal] = useState();

    const { quote } = useContext(QuoteContext);
    const { journal, setJournal } = useContext(UserContext);

    const handleChange = (event) => {
        event.preventDefault();
        setCurrentJournal(event.target.value);
    };

    const createEntry = () => {
        const newEntry = {
            id: Date.now(),
            date: createDate(),
            body: currentJournal,
            type: 'journal'
        };
        
        updateUser(newEntry)
            .then(entry => setJournal([...journal, entry]))
    };

    return (
        <section className='journal-page'>
            <h4>{quote}</h4>
            <form>
                <textarea
                    value={currentJournal}
                    type='text'
                    rows="20"
                    cols="50"
                    onChange={(event) => handleChange(event)} placeholder="How do Kanye's wise words inspire YOU..."></textarea>
                <br />
                <Link to={'/dashboard'}>
                    <button onClick={createEntry}>Submit</button>
                </Link>
            </form>
        </section>
    );
};

export default JournalPage;