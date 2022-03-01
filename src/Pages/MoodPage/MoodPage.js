import React, { useContext, useState } from 'react';
import './MoodPage.scss';
import { UserContext } from '../../Contexts/UserContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import { createDate, createTime } from '../../Utilities/Date';
import { updateUser } from '../../apiCall';
import setImages from '../../Utilities/SetImages';
import Nav from "../../Components/Nav";


const MoodPage = () => {

    const [ currentMood, setCurrentMood ] = useState(3);

    const { mood, setMood } = useContext(UserContext);


  const handleChange = (value) => {
    setCurrentMood(value)
  };
  
  const handleSubmit = () => {
    const newMood = {
      id: Date.now(),
      time: createTime(),
      date: createDate(),
      mood: currentMood,
      type: 'mood',
    };

    updateUser(newMood)
      .then(entry => setMood([...mood, entry]))
  };

    return (
      <section className="mood-page" data-testid="mood-page">
        <Nav/>
        <h1 className='vibes'>Vibe Check</h1>
        <h2 className='feeling'>How ya feeling today?</h2>
        {setImages(currentMood)}
        <section style={{ width: "500px" }}>
          <Slider
            trackStyle={{
              background: "red",
                    }}
            dotStyle={{
                background: "red",
                border: 'none'
                }}
            handleStyle={{
                background: "red",
                border: "none"
            }}
            defaultValue="1"
            min={1}
            max={5}
            dots={true}
            value={currentMood}
            onChange={(value) => handleChange(value)}
          />
        </section>
        <Link to="/dashboard" data-testid="submit-link" onClick={handleSubmit}>
          Submit
        </Link>
      </section>
    );
};

export default MoodPage
