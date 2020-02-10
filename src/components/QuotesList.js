import React, { useContext } from "react";
import { QuotesContext } from "../context/QuotesContext";
import  Quotes  from "../components/Quotes";

const QuotesList = () => {
  const { addQuote } = useContext(QuotesContext);

  return (
    <div>
      {addQuote.map(item => {
        return <Quotes key={item.id} quote={item} />;
      })}
    </div>
  );
};

export default QuotesList;
