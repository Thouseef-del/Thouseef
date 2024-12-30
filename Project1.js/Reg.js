import React from 'react'
import './Reg.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    
    // const Reg = () => {
    //     const navigate = useNavigate()
    //   const handleHome=()=>{
    //     navigate("/home")
    
     
  return (
    <div className='boy'>
    <div className='wrapper'>
        <form action=''>
            <h1>Register</h1>

            <div className='acountcircle'>
              
            </div>
            <div className='input-box'>
                <input type='text' placeholder='   Name' required></input>
                <PersonIcon className='icon'/>
            </div>
            
            
            <div className='input-box'>
                <input type='password' placeholder='  Password' required></input>
                <LockIcon className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Confirm Password' required></input>
                <LockIcon className='icon'/>
            </div>
            

            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
                

            </div>
            <a href='/home'>
            <div className='but'>
            SIGN UP
            </div>
            </a>

            


        </form>
    </div>
    </div>
  )
}

export default Reg