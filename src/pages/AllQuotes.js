import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound"

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Nelson Mandela",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: "q2",
    author: "Walt Disney",
    text: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: "q3",
    author: "Steve Jobs",
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    id: "q4",
    author: "Eleanor Roosevelt",
    text: "If life were predictable it would cease to be life, and be without flavor.",
  },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
