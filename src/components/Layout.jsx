import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className='flex mt-6'>
                <Sidebar />
                <div className='wrapper'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout