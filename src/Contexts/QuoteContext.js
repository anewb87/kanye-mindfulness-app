import React, { useState, useEffect, createContext, useContext } from "react";
import { getQuote } from "../apiCall";
import { ErrorContext } from "./ErrorContext";


export const QuoteContext = createContext();

const QuoteProvider = (props) => {
  const [quote, setQuote] = useState('');
  const { error, setError } = useContext(ErrorContext);

  useEffect(() => {
    getQuote()
      .then(data => setQuote(data.quote))
      .catch(err => setError(err))
  }, [])

  const quoteValue = { quote, setQuote, error }
  // const journalValue = {journal, setJournal}

  return (
    <QuoteContext.Provider value={ quoteValue }>
      {props.children}
    </QuoteContext.Provider>
  )
}

export default QuoteProvider
