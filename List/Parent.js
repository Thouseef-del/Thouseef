import React from 'react'

export const Parent = (props) => {
   

  return (
    <div>
        <ul>
            {
                props.data.map((a,b)=>(
                    <li key={b}>{a}</li>
                ))
            }
        </ul>
        <ol>
            {
                props.data.map((a,b)=>(
                    <li key={b}>{a}</li>
                ))
            }
        </ol>
        
    </div>
  )
}
