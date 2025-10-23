import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
  useEffect(() => {
    axios.get('http://localhost:3003/user/getalluser')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [])
  return (
    <>
      <div>Home</div>
    </>
  )
}
export default Home;