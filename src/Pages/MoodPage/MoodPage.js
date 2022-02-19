import React, { useContext } from 'react'

const MoodPage = () => {

    const { quote } = useContext(QuoteContext);
    const { mood, setMood } = useContext(MoodContext);
    
    return (
        <section>
            <h4>Mood Page</h4>
        </section>
    );
};

export default MoodPage