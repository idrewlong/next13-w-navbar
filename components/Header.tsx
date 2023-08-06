"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BsFacebook, BsList, BsTwitter, BsX, BsYoutube} from "react-icons/bs";
import { useState } from 'react';

const styles = {
      navLinks:"ml-10 uppercase border-b border-white hover:scale-105 duration-300 text-md",
};

function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <nav className='w-full h-24 bg-black shadow-xl'>
      {/* Desktop Menu */}
      <div className='flex items-center justify-between h-full w-full px-4'>
            <Link href="/">
                  <Image src="/IDLOGO.png"
                  alt="id-dev logo"
                  width={75}
                  height={75}
                  className='cursor-pointer hover:scale-105 duration-300'/>
            </Link>
            <div className='text-white hidden sm:flex mr-4'>
                  <ul className='hidden sm:flex'>
                        <li className={styles.navLinks}> <Link href="/about"> About </Link>  </li>
                        <li className={styles.navLinks}> <Link href="/services"> Services </Link>  </li>
                        <li className={styles.navLinks}> <Link href="/contact"> Contact </Link>  </li>
                  </ul>
            </div>

       {/* Mobile Menu */}
       <div className='sm:hidden cursor-pointer pl-4' onClick={toggleMenu}>
            <BsList className="h-8 w-8 text-gray-400" />
      </div>

      </div>

      <div className= {menuOpen
             ?'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-100 p-10 ease-in-out duration-500' 
             : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500" }
             >

            <div className='flex w-full items-center justify-end'>
                  <div onClick={toggleMenu} 
                  className='cursor-pointer'>
                        <BsX className='h-8 w-8 text-gray-800'/>
                  </div>
            </div>

            {/* Mobile Menu Links */}
            <div className='flex-col py-4'>
                  <ul>
                        <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-gray-800'> <Link href="/about"> About </Link> </li>
                        <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-gray-800'> <Link href="/services"> Services </Link> </li>
                        <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-gray-800'> <Link href="/contact"> Contact </Link> </li>
                  </ul>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-row justify-around pt-10 items-center'>
                  <Link href="https://www.youtube.com"> <BsYoutube size={30} className='cursor-pointer hover:scale-105 ease-in-out duration-300'/> </Link>
                  <Link href="https://www.facebook.com"> <BsFacebook size={30} className='cursor-pointer hover:scale-105 ease-in-out duration-300'/> </Link>
                  <Link href="https://www.facebook.com"> <BsTwitter size={30} className='cursor-pointer hover:scale-105 ease-in-out duration-300'/> </Link>
            </div>
                  <Image src="/IDLOGO.png" 
                  alt='logo'
                  width={75}
                  height={75}
                  className='cursor-pointer pt-10 mx-auto hover:scale-105 ease-in-out duration-300'/>
      </div>

 
      </nav>
    </header>
  );
}

export default Header