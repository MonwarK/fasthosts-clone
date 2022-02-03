import React from 'react';
import { PhoneIcon, UserIcon, InformationCircleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <>
      <header className='bg-[#031A4A] text-white py-6 px-3 flex items-center justify-between text-sm sticky top-0 left-0 z-50'>
        <Link href="/">
          <img 
            className='h-6 cursor-pointer'
            src="https://www.fasthosts.co.uk/img/logos/logo.svg" 
            alt="Fasthosts Logo" 
          />
        </Link>

        <div className='hidden xl:flex items-center flex-1 space-x-3 px-2'>
          <nav className='flex items-center flex-1'>
            <Link href="/domains">
              <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>Domain</p>
            </Link>
            <Link href="/about">
              <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>About</p>
            </Link>
            <Link href="/contact">
              <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>Contact</p>
            </Link>
          </nav>

          <div>
            <p>Sales <span className='text-blue-300 cursor-pointer'>0800 0612 153</span></p>
          </div>

          <button className='border hover:border-2 rounded-md px-4 py-1'>
            Get Support
          </button>
          
          {user ? (
              <Link href="/profile">
                <button className='bg-blue-500 hover:bg-blue-600 duration-200 border border-blue-500 rounded-md py-1 px-4'>
                  My Profile
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className='bg-blue-500 hover:bg-blue-600 duration-200 border border-blue-500 rounded-md py-1 px-4'>
                  Log In
                </button>
              </Link> 
            )}
        </div>

        <div className='xl:hidden flex space-x-2 items-center'>
          <PhoneIcon className='h-8 cursor-pointer hover:animate-pulse' />
          <UserIcon className='h-8 cursor-pointer hover:animate-pulse' />
          <InformationCircleIcon className='h-8 cursor-pointer hover:animate-pulse' />
          <div onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <MenuIcon className='h-8 cursor-pointer hover:animate-pulse' /> : <XIcon className='h-8 cursor-pointer hover:animate-pulse' />}
          </div>
        </div>
      </header>

      {isOpen && (
        <div className='xl:hidden z-40 bg-blue-900 bg-opacity-70 fixed top-0 left-0 w-full h-full flex'>
          <div onClick={() => setIsOpen(false)} className='flex-grow' />
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ type: "spring", stiffness: 50 }}
            className='bg-[#031A4A] text-white pt-24 pb-4 max-w-xs w-full flex flex-col justify-between'
          >
            <div>
              <Link href="/domains">
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Domains</p>
              </Link>
              <Link href="/about">
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>About</p>
              </Link>
              <Link href="/contact">
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Contact</p>
              </Link>
            </div>

            <div>
              {user ? (
                <Link href="/profile">
                  <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>My Profile</p>
                </Link>
              ) : (
                <Link href="/login">
                  <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Login</p>
                </Link> 
              )}
              <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Get Support</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
