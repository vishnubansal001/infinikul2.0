
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignUp from '../Screens/SignUp'
import SignIn from '../Screens/SignIn'

import { MainLandPage } from '../Screens/MainLandPage'

export const Routee = () => {
  return (
    <div>

        <Routes>
             <Route path='/' element={<MainLandPage/>}/>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
        </Routes>
    </div>
  )
}
