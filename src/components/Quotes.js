import React, { useState, useContext } from "react";
import axios from "axios";
import { QuotesContext } from "../context/QuotesContext";
import { axiosWithAuth } from "./AxiosWithAuth";

const Quotes = ({ quote }) => {
  const { addQuote, setAddQuote } = useContext(QuotesContext);
  const [editQuote, setEditQuote] = useState({ quote: "", speaker: "" });

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`https://quotes-db-mike.herokuapp.com/quotes/${id}`)
      .then(res => setAddQuote(addQuote.filter(item => item.id !== id)));
  };

  const handleEdit = quote => {
    if (editQuote.quote) {
      axiosWithAuth().put(
        `https://quotes-db-mike.herokuapp.com/quotes/${quote.id}`,
        editQuote
      ); setEditQuote({quote: "", speaker: ""})
    } else {
      setEditQuote(quote);
    }
  };
  return (
    <div>
      {editQuote.quote ? (
        <>
          <input value={editQuote.quote} />
          <input value={editQuote.speaker} />
        </>
      ) : (
        <>
          <p> {quote.quote}</p>
          <p> {quote.speaker}</p>
        </>
      )}
      <button onClick={() => handleDelete(quote.id)}> DELETE</button>
      <button onClick={() => handleEdit(quote)}> EDIT</button>
    </div>
  );
};

export default Quotes;
