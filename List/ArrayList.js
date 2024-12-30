import React from 'react'

const ArrayList = () => {
    const arr1=["stud1","stud2","stud3","stud4","stud5","stud6","stud7","stud8","stud9","stud10","stud11"]

  return (
    <div>
        <ol>
            {
                arr1.map( (a,b) =>(
                    <li key={b}>{a}</li>

                ))
            }
        </ol>
        <ul>
            {
                arr1.map((a,b) =>(
                    <li key={b}>{a}</li>
                ))
            }
        </ul>


    </div>
  )
}

export default ArrayList