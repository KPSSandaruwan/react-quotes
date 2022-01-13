import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { RouteNames } from "../RouteNames";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push(RouteNames.ALL_QUOTES);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
