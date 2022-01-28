import React from 'react';
import { PhoneIcon, UserIcon, InformationCircleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>Domain</p>
            <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>About</p>
            <p className='cursor-pointer hover:bg-white hover:text-gray-800 px-2 py-1 rounded-full duration-200'>Contact</p>
          </nav>

          <div>
            <p>Sales <span className='text-blue-300 cursor-pointer'>0800 0612 153</span></p>
          </div>

          <button className='border hover:border-2 rounded-md px-4 py-1'>
            Get Support
          </button>
          
          <Link href="/login">
            <button className='bg-blue-500 hover:bg-blue-600 duration-200 border border-blue-500 rounded-md py-1 px-4'>
              Log In
            </button>
          </Link>
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
        <div className='xl:hidden z-40 bg-blue-900 bg-opacity-70 fixed top-0 left-0 w-full h-full'>
          <div className='flex justify-end h-full'>
            <div className='bg-[#031A4A] text-white pt-24 pb-4 max-w-xs w-full flex flex-col justify-between'>
              <div>
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Domains</p>
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>About</p>
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Contact</p>
              </div>

              <div>
                <Link href="/login">
                  <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Login</p>
                </Link>
                <p className='px-5 py-4 hover:bg-blue-900 cursor-pointer'>Get Support</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
