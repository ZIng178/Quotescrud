import React, { useContext } from "react";
import axios from "axios";
import { QuotesContext } from "../context/QuotesContext";

const Quotes = ({ quote }) => {
  const { addQuote, setAddQuote } = useContext(QuotesContext);
  const handleDelete = id => {
    axios.delete(`https://quotes-db-mike.herokuapp.com/quotes/${id}`)
    .then(res=> setAddQuote(addQuote.filter(item=> item.id !==id)))
  };
  return (
    <div>
      <p> {quote.quote}</p>
      <p> {quote.speaker}</p>
      <button onClick={() => handleDelete(quote.id)}> DELETE</button>
    </div>
  );
};

export default Quotes;
