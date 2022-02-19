import React, { useContext, useState }from 'react'
import { QuoteContext } from '../../Contexts/QuoteContext';
import { Link } from 'react-router-dom';
import { JournalContext } from '../../Contexts/JournalContext';

const JournalPage = () => {
    
    const [currentJournal, setCurrentJournal] = useState();

    const { quote } = useContext(QuoteContext);
    const { journal, setJournal } = useContext(JournalContext)

    const handleChange = (event) => {
        event.preventDefault()
        setCurrentJournal(event.target.value)
    }

    const createEntry = () => {
        const newEntry = { id: Date.now(), body: currentJournal }
        setJournal(...journal, newEntry)
    }

    return (
        <section>
            <h4>{quote}</h4>
            <form>
                <textarea
                    value={currentJournal}
                    type='text'
                    rows="20"
                    cols="50"
                    onChange={(event) => handleChange(event)} placeholder="How do Kanye's wise words inspire YOU..."></textarea>
                <br/>
                <Link to={'/dashboard'}>
                    <button onClick={createEntry}>Submit</button>
                </Link>
            </form>
        </section>
    )
}

export default JournalPage;