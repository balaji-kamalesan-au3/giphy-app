// I was wondering about how to design the UI So I just went to giphy and designed something similar to it

// This Layout has the base Layout for the Home and Trending Page

import './App.css';
import { Outlet } from 'react-router-dom';
import Logo1 from './Assets/giphy.svg'
import Logo2 from './Assets/giphy1.svg'

function Layout() {
  return (
    <>
      <header className=" min-h-[70px] max-h-[75px] mx-[2%] px-[3%] border-b-[3px] border-b-black flex items-center  ">
        <div className='flex items-center '>
          <img src={Logo1} className='h-[35px] mr-[10px]' alt="Giphy Logo" />
          <img src={Logo2} className='h-[35px] ' alt="Giphy Text" />
        </div>
      </header>
      <div className="my-[10px]" >
        <Outlet />
      </div>
    </>

  );
}

export default Layout;
