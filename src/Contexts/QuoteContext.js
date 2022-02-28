import React, { useState, useEffect, createContext, useContext } from "react";
import { getQuote } from "../apiCall";
import { UserContext } from "./UserContext";


export const QuoteContext = createContext();



const QuoteProvider = (props) => {
  const [quote, setQuote] = useState('');

  const { error, setError } = useContext(UserContext);

  useEffect(() => {
    getQuote()
      .then(data => setQuote(data.quote))
      .catch(err => setError(err.message))
  }, [])

  const quoteValue = { quote, setQuote, error }

  return (
    <QuoteContext.Provider value={ quoteValue }>
      {props.children}
    </QuoteContext.Provider>
  )
}

export default QuoteProvider
