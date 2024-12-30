import React from 'react'
import { Parent } from './Parent'

const Child = () => {
    const arr1=["stud1","stud2","stud3","stud4","stud5","stud6","stud7","stud8","stud9","stud10","stud11"]
    
  return (
    <div>
      <Parent data={arr1}/>  
    </div>
  )
}

export default Child