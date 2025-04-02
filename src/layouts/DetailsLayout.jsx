import React from 'react';
import Header from '../components/Header/Header';
import RightNavbar from '../components/RightNavbar/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-2">
        <section className="col-span-9">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
