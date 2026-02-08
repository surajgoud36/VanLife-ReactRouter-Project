import React from 'react'
import {Outlet,Navigate,useLocation} from 'react-router-dom'
export default function AuthRequiredLayout(){
    const authenticated = localStorage.getItem("loggedin")
    const location = useLocation()
   
    if(!authenticated)
        return <Navigate to="/login" state={{message:"You must login first!",path:`${location.pathname}`}} replace/>
    return <Outlet/>
}