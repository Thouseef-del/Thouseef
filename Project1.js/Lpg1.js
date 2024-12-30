import React, { useState } from 'react'
import './Lpg1.css';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Password } from '@mui/icons-material';



const Lpg1 = () => {
//     const navigat = useNavigate()
//   const handleLogin=()=>{
//     navigat("/signup")
//   }

//   const Lpg1 = () => {
//     const navigate = useNavigate()
//   const handleHome=()=>{
//     navigate("/home")
//   }
const[Username,setusername]=useState("");
const[usererror,setUsererror] =useState(false);

const handleuserchange = (e)=>{
    setusername(e.target.value);
}
const handleLogin = (e)=>{
    e.preventDefault();
    if(Username==="" || Password===""){
        alert("Input fields are empty !!!");
    }
}
  
 
  return (
    <div className='bo1y'>
    <div className='wrapper'>
        
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            
        
            <div style={{textAlign:'center'}}>
            <AccountCircleIcon sx={{fontSize:80}}/>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='   Username' onChange={handleuserchange}required></input>
                <PersonIcon className='icon'/>
                <p style={{color:'white'}}>{usererror}</p>
            </div>
            
            
            <div className='input-box'>
                <input type='password' placeholder='  Password' required></input>
                
                <LockIcon className='icon'/>
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot password?</a>

            </div>
            <a href='/home'>
            <div className='but'>
            LOGIN
            </div>
            </a>
            <div className='register-link'>
                <p>Don't have an account? <a href='/signup'
                // onChange={handleLogin}
                 >Register</a></p>
            </div>


        </form>
    </div>
    </div>
  )
}


export default Lpg1



