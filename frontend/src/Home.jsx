import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {

  useEffect(() => {
    console.log("Fetching data...");
    axios.get('http://localhost:3003/user/getallusers')
      .then(res => console.log("Response:", res.data))
      .catch(err => console.log("Error:", err));
  }, []); 

  return (
    <div>Home Page (With useEffect)</div>
  );
}

export default Home;
