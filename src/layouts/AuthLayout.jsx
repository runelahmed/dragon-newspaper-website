import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LogIn from '../components/Navbar/LogIn/LogIn';
import Register from '../components/Register/Register';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <header>
        <Navbar></Navbar>
      </header>
          <section className='w-10/12 mx-auto'>
            <Outlet></Outlet>
          </section>
          
    </div>
  );
}

export default AuthLayout