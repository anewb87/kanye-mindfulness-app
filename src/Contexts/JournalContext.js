import React, { useState, createContext } from "react";

export const JournalContext = createContext();

const JournalProvider = (props) => {
  
  const [journal, setJournal] = useState([]);

  const journalValue = { journal, setJournal };

  return (
    <JournalContext.Provider value={journalValue}>
      {props.children}
    </JournalContext.Provider>
  );
};

export default JournalProvider;

