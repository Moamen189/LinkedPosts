import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <div className='p-5 bg-linear-to-b from-blue-500 min-h-screen'> 
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Layout