import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function login() {
  return (
    <div className='grid place-items-center flex-1 min-h-[50vh] px-1 py-5'>
      <Head>
        <title>Login | Fasthosts</title>
      </Head>

      <div className='shadow-lg p-5 rounded-2xl max-w-lg w-full border'>
        <h3 className='text-xl text-center mb-2 font-semibold'>Login</h3>

        <div className='mb-5'>
          <label className='text-xs'>Email</label>
          <input 
            type="email" 
            className='w-full px-3 py-2 bg-gray-50 border rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label className='text-xs'>Password</label>
          <input 
            type="password" 
            className='w-full px-3 py-2 bg-gray-50 border rounded-md'            
          />
        </div>

        <button className='primary-button'>
          LOG IN
        </button>

        <Link href="/register">
          <p className='text-center text-blue-500 mt-2 active:underline cursor-pointer'>Don't have an account? Click here to sign up</p>
        </Link>
      </div>
    </div>
  );
}
