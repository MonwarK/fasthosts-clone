import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import IsAuth from '../components/IsAuth';
import { AuthContext } from '../context/auth.context';

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <IsAuth isAuth={false}>
      <div className='grid place-items-center flex-1 min-h-[80vh] px-1 py-5 dark:bg-gray-900 dark:text-white'>
        <Head>
          <title>Login | Fasthosts</title>
        </Head>

        <div className='shadow-lg p-5 rounded-2xl max-w-lg w-full border dark:bg-gray-800 dark:border-gray-800'>
          <h3 className='text-xl text-center mb-2 font-semibold'>Login</h3>

          <div className='mb-5'>
            <label className='text-xs'>Email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              className='w-full px-3 py-2 bg-gray-50 border rounded-md'
            />
          </div>

          <div className='mb-5'>
            <label className='text-xs'>Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              className='w-full px-3 py-2 bg-gray-50 border rounded-md'            
            />
          </div>

          <button onClick={() => signIn(email, password)} className='primary-button'>
            LOG IN
          </button>

          <Link href="/register">
            <p className='text-center text-blue-500 mt-2 active:underline cursor-pointer'>Don't have an account? Click here to sign up</p>
          </Link>
        </div>
      </div>
    </IsAuth>
  );
}
