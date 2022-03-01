import React, { useContext, useState } from 'react';
import './JournalPage.scss';
import { QuoteContext } from '../../Contexts/QuoteContext';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { createDate } from '../../Utilities/Date';
import { updateUser } from '../../apiCall';
import Nav from "../../Components/Nav";

const JournalPage = () => {

    const [currentJournal, setCurrentJournal] = useState();

    const { quote, setError } = useContext(QuoteContext);
    const { journal, setJournal } = useContext(UserContext);

    const handleChange = (event) => {
        event.preventDefault();
        setCurrentJournal(event.target.value);
    };
    const history = useHistory()
    
    const updateState = (entry) => {
        setJournal([...journal, entry]);
        history.push('/dashboard')
    };

    const createEntry = (event) => {
      event.preventDefault();
        const newEntry = {
            id: Date.now(),
            date: createDate(),
            body: currentJournal,
            type: 'journal'
        };

        updateUser(newEntry)
            .then(entry => updateState(entry))
            .catch(err => setError(err))
    };

    return (
      <section className='journal-page'>
          <Nav />
          <h3 className='journal-title'>Journal Page</h3>
            <h4>{quote}</h4>
            <form>
                <textarea
                    value={currentJournal}
                    type='text'
                    rows="20"
                    cols="50"
                    onChange={(event) => handleChange(event)}
                    placeholder="How do Kanye's wise words inspire YOU...">
                </textarea>
                <br />
                <button className='journal-button' onClick={createEntry} type='submit'disabled={!currentJournal}>Submit</button>
            </form>
        </section>
    );
};

export default JournalPage;
