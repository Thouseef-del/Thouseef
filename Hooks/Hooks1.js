import React, {useState} from 'react'

const Hooks1 = () => {
    const [count,setcount]=useState(0)
    const [str,setstr]=useState("");
    const handleAdd =() =>{
        setcount(count+1);

    }
    const handleSub =() =>{
        setcount(count-1);

    }
    const handleChange=(e)=>
        {
            setstr(e.target.value)
        }
    
    

  return (
    <div>
    <button onClick={handleAdd}>+</button>
    <h1>{count}</h1>
    <button onClick={handleSub}>-</button>
    
    <input  onChange={handleChange}></input>

    </div>
  )
}


export default Hooks1