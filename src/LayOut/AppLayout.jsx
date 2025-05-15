import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

export default function () {
  return (
    <>
   <div className='px-4'>
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
