import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'
import Lpg1 from '../Project1.js/Lpg1'
import Reg from '../Project1.js/Reg'
import Lan from '../Project1.js/Lan'
// import Lan from '../Lan'
// import Reg from '../Reg'
// import Login from '../Login'
import Li from '../Project1.js/Li'
import Days from '../Project1.js/Days'

const Navigator = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lpg1/>}></Route>
            <Route path="/signup" element={<Reg/>}></Route>
            <Route path="/home" element={<Lan/>}></Route>
            <Route path="/Li" element={<Li/>}></Route>
            <Route path="/Days" element={<Days/>}></Route>
        </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default Navigator