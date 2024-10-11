"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { TfiWrite } from "react-icons/tfi";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";



const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   const [theme, setTheme] = useState<'light' | 'dark' | null>(null); // Default is null to detect first

  // Get the theme from localStorage or system preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark'); // Set theme from localStorage if exists
    } else {
      // Check system preference if no saved theme
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(userPrefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply the theme to the document (and store it in localStorage)
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Only render the navbar once the theme is determined to avoid flicker
  if (theme === null) return null;
  return (
    <footer className="bg-white py-3 rounded shadow-xl dark:bg-gray-900">
    <div className="container font-semibold flex  items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <Link href="/">
   <div className='flex'>
   <Image
    className="w-16"
    src="https://i.ibb.co/FBBRt37/Google-Photos-Logo-2015.png"
    alt="logo"
    width={64} 
    height={64} 
    priority 
  />
              <p className='mt-2'>GrootHub</p>
   </div>
      </Link>
      
      <div className="flex font-semibold">
        <Link
          href="/"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Facebook"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mx-2 text-gray-600  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Github"
        >
          Contact
        </Link>
      </div>

      <div className="text-sm flex pr-6 text-gray-600 dark:text-gray-300">
      <button onClick={toggleTheme} className="mt-1">
      {theme === 'light' ? (
          <>
            <IoIosMoon className="w-6 h-6  dark:text-white" />
           
          </>
        ) : (
          <>
            <MdSunny className="w-6 h-6  dark:text-white" />
          </>
        )}
      </button>
       <Link href="/create">
       <div className='mt-2'><TfiWrite className='w-12 h-6'/></div>
       </Link>
<Link href="/auth/login">        <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 ">Log in</button></Link>

   {/* for login user  */}
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="relative z-10 p-2  rounded-md   "
      >
          <Image
    className="w-16 rounded-full"
    src="https://i.ibb.co/FBBRt37/Google-Photos-Logo-2015.png"
    alt="logo"
    width={64} 
    height={64} 
    priority 
  />   
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute z-10 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition-transform transform duration-100 ease-out scale-100"
        >
         <div className='px-2'>
         <Link
            href="/profile"
            className="block py-6 font-medium text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Profile & Analytic
          </Link>
        
          <button
            className="px-6 mx-2 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 "
          >
            LogOut
          </button>
         </div>
        </div>
      )}
    </div>
    
      </div>
     
    </div>
  </footer>
  );
};

export default Navber;
  

