import React, { useState, useContext } from "react";
import axios from "axios";
import {QuotesContext} from "../context/QuotesContext"





const Forms = () => {
    const {addQuote,setAddQuote}=useContext(QuotesContext)
  const [postForm, setPostForm] = useState({
    quote: "",
    speaker: ""
  });
  
  const handleChange=(e)=>{
   e.preventDefault();
   setPostForm({...postForm, [e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://quotes-db-mike.herokuapp.com/quotes" , postForm)
    // .then(res=> console.log( "post response", res))
    .then(res=>{
        setPostForm({
            quote: "",
            speaker: ""})
        setAddQuote([...addQuote, res.data])
})
  
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="quote"
        placeholder="add quotes"
        value={postForm.quote}
        onChange={handleChange}
      />

      <input
        type="text"
        name="speaker"
        placeholder="add speaker"
        value={postForm.speaker}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;