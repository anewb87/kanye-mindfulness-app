import React, { useContext, useState } from 'react'
import { MoodContext } from '../../Contexts/MoodContext';
import { QuoteContext } from '../../Contexts/QuoteContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const MoodPage = () => {

    const [ currentMood, setCurrentMood ] = useState(3);

    const { quote } = useContext(QuoteContext);
    const { mood, setMood } = useContext(MoodContext);

    const handleChange = (value) => {
        setCurrentMood(value)
    
    }

    const setImages = (currentMood) => {
        let emoji;
        switch(currentMood) {
            case 1: 
                emoji='😠'; 
                break;
            case 2:
               emoji='😕';
               break;
            case 3:
                emoji='😑';
                break;
            case 4:
                emoji='😌';
                break;
            case 5:
                emoji='😺';
                break;

        }
        return emoji;
    }
    
    return (
        <section style={{width: '500px'}}>
            <h4>Mood Page</h4>
            <p>Current Value: {setImages(currentMood)}</p>
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