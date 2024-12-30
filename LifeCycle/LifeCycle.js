import React, { useState } from 'react'

const LifeCycle = () => {
    const[count,setCount]=useState(0) ;
    const handleadd=()=>{
        setCount(count+1);
    }
    const handlesub=()=>{
        setCount(count-1);
    }

  return (
    <div>
        <center>
            <button onClick={handleadd}>+</button>
            <br></br>
            <h1 >{count}
                

            </h1>
            <button onClick={handlesub}>-</button>
        </center>
    </div>
  )
}

export default LifeCycle