import React, { useContext, useState } from 'react'
import { MoodContext } from '../../Contexts/MoodContext';
import { QuoteContext } from '../../Contexts/QuoteContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import { createDate } from '../../Utilities/Date';
import setImages from '../../Utilities/SetImages';


const MoodPage = () => {

    const [ currentMood, setCurrentMood ] = useState(3);

    const { quote } = useContext(QuoteContext);
    const { mood, setMood } = useContext(MoodContext);

    const handleChange = (value) => {
        setCurrentMood(value)
    
    }


    const handleSubmit = () => {
        const newMood = {
            id: Date.now(),
            date: createDate(),
            todaysMood: currentMood
        };

        setMood([...mood, newMood])

    }
    
    return (
        <section style={{width: '500px'}}>
            <h4>Mood Page</h4>
            <p>Current Value: {setImages(currentMood)}</p>
            <Slider 
                defaultValue='1'
                min={1}
                max={5}
                dots={true}
                value={currentMood}
                onChange={value => handleChange(value)}     
            />
            <Link to="/dashboard"><button onClick={handleSubmit}>Submit</button></Link>

        </section>
    );
};

export default MoodPage