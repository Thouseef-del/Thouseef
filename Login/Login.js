import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const handleLogin=()=>{
    navigate("/home")
  }
  return (

    <>
    <form>
      <LoginIcon/>
      <lable>Username :</lable>
      <input></input><br></br>
      <label>Password:</label>
      <input type='password'></input>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success" onClick={handleLogin}>
        Login
      </Button>
      
    </form>
    </>
  )
}

export default Login