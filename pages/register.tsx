import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import IsAuth from '../components/IsAuth';
import { AuthContext } from '../context/auth.context';

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <IsAuth isAuth={false}>
      <div className='grid place-items-center flex-1 min-h-[80vh] px-1 py-5'>
        <Head>
          <title>Register | Fasthosts</title>
        </Head>

        <div className='shadow-lg p-5 rounded-2xl max-w-lg w-full border'>
          <h3 className='text-xl text-center mb-2 font-semibold'>Register</h3>

          <div className='mb-5'>
            <label className='text-xs'>Full name</label>
            <input 
              onChange={(e) => setName(e.target.value)}
              type="text" 
              className='w-full px-3 py-2 bg-gray-50 border rounded-md'
            />
          </div>

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

          <button onClick={() => register(name, email, password)} className='primary-button'>
            REGISTER
          </button>

          <Link href="/login">
            <p className='text-center text-blue-500 mt-2 active:underline cursor-pointer'>Already have an account? Click here to sign in</p>
          </Link>
        </div>
      </div>
    </IsAuth>
  );
}
