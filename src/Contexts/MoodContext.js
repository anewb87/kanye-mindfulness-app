import React, { createContext, useState } from "react";

export const MoodContext = createContext();

const MoodProvider = (props) => {

    const [mood, setMood] = useState([]);

    const moodValue = { mood, setMood };

    return (
        <MoodContext.Provider value={moodValue}>
            {props.children}
        </MoodContext.Provider>
    )
};

export default MoodProvider