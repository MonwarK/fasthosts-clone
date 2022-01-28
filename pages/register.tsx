import Link from 'next/link';
import React from 'react';

export default function register() {
  return (
    <div className='grid place-items-center flex-1 min-h-[50vh]'>
      <div className='shadow-lg p-5 rounded-2xl max-w-lg w-full border'>
        <h3 className='text-xl text-center mb-2 font-semibold'>Register</h3>

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
          REGISTER
        </button>

        <Link href="/login">
          <p className='text-center text-blue-500 mt-2 active:underline cursor-pointer'>Already have an account? Click here to sign in</p>
        </Link>
      </div>
    </div>
  );
}
