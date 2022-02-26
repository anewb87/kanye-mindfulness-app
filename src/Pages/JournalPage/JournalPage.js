import React, { useContext, useState } from 'react';
import './JournalPage.scss'
import { QuoteContext } from '../../Contexts/QuoteContext';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { createDate } from '../../Utilities/Date';
import { updateUser } from '../../apiCall';
import { ErrorContext } from '../../Contexts/ErrorContext';
import ErrorPage from '../ErrorPage/ErrorPage';

const JournalPage = () => {

    const [currentJournal, setCurrentJournal] = useState();
    const { error, setError } = useContext(ErrorContext);

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
            .catch(err => setError(err))
    };

     const determineDisplay = () => {
       if (error) {
         return (
           <>
             <ErrorPage />
           </>
         );
       } else {
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
                <Link to={'/dashboard'}onClick={createEntry}>Submit</Link>
            </form>
        </section>
        );
       }
     };

    return (
        <>
            {determineDisplay()}
        </>
    );
};

export default JournalPage;
