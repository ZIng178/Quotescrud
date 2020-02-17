import React, { useState } from "react";
import axios from "axios";


function LogIn() {
  const [cred, setCred] = useState({
    userName: "",
    password: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting")
    axios.post( `https://quotes-db-mike.herokuapp.com/auth/login`, cred)
     
        .then(res => {
            console.log("login", res)
                localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log(err))
};
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="userName"
        onChange={handleChange} value={cred.userName} />
        <input type="password" placeholder="password" name="password"
          onChange={handleChange} value={cred.password}/>
          <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default LogIn;
