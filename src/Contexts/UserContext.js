import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../apiCall";

export const UserContext = createContext()

const UserProvider = (props) => {

    const [user, setUser] = useState({})

    const [journal, setJournal] = useState([]);
    const journalValue = { journal, setJournal }

    const [mood, setMood] = useState([])
    const moodValue = { mood, setMood }

    useEffect(() => {
        getUser()
            .then(data => setUser(data))
    }, [])

    setJournal(user.journal)
    setMood(user.moods)
    // console.log(user.moods)
    // console.log(user.journal)

    return (
        <UserContext.Provider value={ journalValue, moodValue } >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider