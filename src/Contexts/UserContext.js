import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../apiCall";

export const UserContext = createContext()

const UserProvider = (props) => {

    const [user, setUser] = useState({})
    // const userValue = {user, setUser}

    const [journal, setJournal] = useState([]);
    // const journalValue = { journal, setJournal }

    const [mood, setMood] = useState([])
    // const moodValue = { mood, setMood }

    const values = { user, setUser, journal, setJournal, mood, setMood}

    useEffect(() => {
        getUser()
            .then(data => setData(data))
    }, [])

    const setData = (data) => {
        setUser(data.firstName)
        setJournal(data.journal)
        setMood(data.moods)
    }

    console.log(user)
    console.log(mood)
    console.log(journal)

    return (
        <UserContext.Provider value={ values } >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider