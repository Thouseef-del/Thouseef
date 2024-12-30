import { colors } from '@mui/material';
import React, { useState } from 'react'

const FormHandling = () => {
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [userError, setuserError] = useState(false)
    const [passError, setpassError] = useState(false)
    const [emailError, setemailError] = useState(false)

    const handleuser = (e) => {
        setusername(e.target.value)
    }
    const handlemail = (e) => {
        setemail(e.target.value)
    }
    const handlepass = (e) => {
        setpassword(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(username===""&&password===""&&email==="")
        {
            alert("Input field cannot be empty")
        }
        else if(username.length<3)
        {
            setuserError(!userError)
        }
        else if(password.length<8)
        {
            setpassError(!passError)
        }
        else if(!regex.test(email)){
            setemailError(!emailError)
        }
        else 
        {
            alert("Form submited successfully")
        }
    }
  return (
    <div>
        <center>
        <form>
            <label for = '1'>UserName :</label>
            <input id = '1' onChange={handleuser}></input>
            {userError&&<p style={{color:"red"}}>Username must be max 3 char</p>}
            <br></br>
            <label for = '3'>Password :</label>
            <input id = '3' onChange={handlepass}></input>
            {passError&&<p>password must be atleast 7 char</p>}
            <br></br>
            <label for = '2'>Email :</label>
            <input id = '2' onChange={handlemail}></input>
            {emailError&&<p>please enter the valid email</p>}
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </center>
    </div>
  )
}

export default FormHandling