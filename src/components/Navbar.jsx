import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b border-black w-full'>
      <div className='max-w-[90rem] mt-4 items-end mx-auto flex'>
        <Link to='/' className='border border-blue-400 text-blue-400 py-2 px-6 uppercase'>Logo</Link>
        <div>
          <Link to='/' className='px-10 font-semibold'>Menu 1</Link>
          <Link to='/menu-two' className='px-10 font-semibold'>Menu 2</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar