import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../apiCall";

export const UserContext = createContext()

const UserProvider = (props) => {

    const [user, setUser] = useState('');

    const [journal, setJournal] = useState([]);

    const [mood, setMood] = useState([]);
     
    const [error, setError] = useState('')

    const values = { user, setUser, journal, setJournal, mood, setMood, error, setError}

    useEffect(() => {
        getUser()
            .then(data => setData(data))
            .catch(err => setError(err.message))
    }, [])

    const setData = (data) => {
        setUser(data.firstName)
        setJournal(data.journal)
        setMood(data.moods)
    }

    return (
        <UserContext.Provider value={ values } >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider