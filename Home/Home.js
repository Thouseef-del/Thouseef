import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate()
    const handleBack = () =>{
        navigate("/")

    }
  return (
    <>
    <h1>wekcome</h1>
    <button onClick={handleBack}>Back</button>
    </>
  )
}

export default Home