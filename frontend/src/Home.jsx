import React, { useEffect } from 'react'
import axios from 

function Home() {
    useEffect(()=>{
        axios.get('http://localhost:3003/user/reactsignup')
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    },[])
  return (
    <>
        <div>Home</div>
    </>
  )
}
export default Home;