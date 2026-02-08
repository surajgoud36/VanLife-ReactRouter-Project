import React from 'react'
import {NavLink} from "react-router-dom"
function NotFound() {
  return (
    <div className='not-found'>
        <h1>Sorry, the page your were looking for was not found.</h1>
        <NavLink to="/">
            <button className='return-to-home'>Return to home</button>
        </NavLink>
    </div>
  )
}

export default NotFound