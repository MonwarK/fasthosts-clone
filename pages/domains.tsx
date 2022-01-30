import React from 'react';
import Head from 'next/head';

export default function domain() {
  return (
    <div className='flex-1 flex flex-col min-h-[80vh]'>
      <Head>
        <title>Find Domains | Fasthosts</title>
      </Head>

      <div className='bg-blue-400 w-full p-4'>
        <div className='flex justify-between p-1 rounded-md'>
          <input 
            className='flex-1 outline-none text-gray-600 px-2 rounded-l-lg' 
            type="text"
            placeholder='Search for your perfect domain here'
          />
          <button className='primary-button w-auto py-3 px-3 rounded-l-none'>
            Find Domains
          </button>
        </div>
      </div>
      <div className='flex-1 grid place-items-center p-3'>
        <div className='text-center'>
          <img 
            className='w-36 mx-auto'
            src="/images/Nomads.png" 
            alt=""
          />
          <p className='text-sm italic'>Search for ideal domain</p>
        </div>
      </div>
    </div>
  );
}
