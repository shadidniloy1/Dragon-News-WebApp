import React from 'react'
import { NavLink } from 'react-router-dom'
import userIcon from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className=""></div>
        <div className="nav space-x-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/career'>Career</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
        <div className="login flex gap-2 items-center">
            <div className="">
                <img src={userIcon} alt="" />
            </div>
            <button className='btn btn-neutral rounded-none'>Login</button>
        </div>

    </div>
  )
}

export default Navbar