import React, { useState, useEffect, createContext } from "react";
import { getQuote } from "../apiCall";


export const QuoteContext = createContext();

const QuoteProvider = (props) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuote()
      .then(data => setQuote(data.quote))
  }, [])

  const quoteValue = { quote, setQuote }

  return (
    <QuoteContext.Provider value={ quoteValue }>
      {props.children}
    </QuoteContext.Provider>
  )
}

export default QuoteProvider
