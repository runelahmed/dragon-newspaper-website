import React from 'react'
import Header from '../components/Header/Header'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Navbar from '../components/Navbar/Navbar'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import RightNavbar from '../components/RightNavbar/RightNavbar'

import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
      <div>
          <header>
              <Header></Header>
          </header>
          <section className='w-10/12 mx-auto'>
              <NewsLetter></NewsLetter>
          </section>
          <section className='w-10/12, mx-auto pt-4'>
              <Navbar></Navbar>
          </section>
          <main className='w-10/12 mx-auto grid grid-cols-12 gap-2'>
              <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
              <section className='col-span-6'> <Outlet></Outlet></section>
              <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
          </main>
    </div>
  )
}

export default HomeLayout