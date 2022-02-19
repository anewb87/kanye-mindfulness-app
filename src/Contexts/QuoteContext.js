import { props } from "bluebird";
import React, { useContext, useState, useEffect, createContext } from "react";
import { getQuote } from "../apiCall";


export const QuoteContext = createContext();

const QuoteProvider = (props) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuote()
      .then(data => setQuote(data.quote))
  }, [])

  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {props.children}
    </QuoteContext.Provider>
  )
}

export default QuoteProvider
