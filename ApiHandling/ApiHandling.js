import axios from 'axios'
import React, { useState } from 'react'
const ApiHandling = () => {
    const [responsedata, setresponsedata] = useState();
const Handleget=()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        console.log("response===============>>>>>",res.data[2].name)
setresponsedata(res.data[2].name)
    })
}


  return (
    <div>
        <h1>{responsedata}</h1>
    <button onClick={Handleget}>Get</button>
    </div>
  )
}

export default ApiHandling