import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-slate-300 flex flex-row justify-between align-middle'>
        <nav>
          <ul className='flex flex-row '>
            <li className='p-4 hover:bg-slate-400 transition-all'>
                <Link to="/">Home</Link>    
            </li>
            <li className='p-4 hover:bg-slate-400 transition-all'>
                <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div>
            <h1 className='p-3 font-bold text-xl'>
                Music App
            </h1>
        </div>
    </div>
  )
}

export default Navbar