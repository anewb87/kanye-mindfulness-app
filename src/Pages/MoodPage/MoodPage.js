import React, { useContext, useState } from 'react'
import { MoodContext } from '../../Contexts/MoodContext';
import { QuoteContext } from '../../Contexts/QuoteContext';
// import Slider from '../../Components/Slider'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const MoodPage = () => {

    const [ currentMood, setCurrentMood ] = useState(0);

    const { quote } = useContext(QuoteContext);
    const { mood, setMood } = useContext(MoodContext);

    const handleChange = (value) => {
        // event.preventDefault()
        setCurrentMood(value)
    
    }
    
    return (
        <section style={{width: '500px'}}>
            <h4>Mood Page</h4>
            <p>Current Value: {currentMood}</p>
            <Slider 
                defaultValue='1'
                min={1}
                max={5}
                value={currentMood}
                onChange={value => handleChange(value)}     
            />

        </section>
    );
};

export default MoodPage