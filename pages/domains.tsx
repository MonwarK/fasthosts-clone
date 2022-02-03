import React, { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DomainRow from '../components/DomainRow';
import { AuthContext } from '../context/auth.context';
import { motion } from 'framer-motion';

interface Query {
  name: string
}

export default function domain() {
  const [domainName, setDomainName] = useState("");
  const [animate, setAnimate] = useState({ scale: 1 });
  const router = useRouter();
  const { name } = router.query;

  const search = async () => {
    setAnimate({ scale: 0 })
    const name = domainName.split(' ').join('').toLowerCase();
    if (!name) return;
    
    router.push({
      pathname: '/domains',
      query: { name }
    })

    setTimeout(() => {
      setAnimate({ scale: 1 })
    }, 100)
  }

  return (
    <div className='flex-1 flex flex-col bg-gray-100'>
      <Head>
        <title>{name ? `Domain results for '${name}'` : "Find Domains"} | Fasthosts</title>
      </Head>

      <div className='bg-blue-400 w-full p-4'>
        <form onSubmit={(e) => e.preventDefault()} className='flex justify-between p-1 rounded-md'>
          <input 
            onChange={(e) => setDomainName(e.target.value)}
            className='flex-1 outline-none text-gray-600 px-2 rounded-l-lg' 
            type="text"
            placeholder='Search for your perfect domain here'
          />
          <button onClick={search} className='primary-button w-auto py-3 px-3 rounded-l-none'>
            Find Domains
          </button>
        </form>
      </div>
      { name ? (
        <div className='flex-1 p-3 min-h-[80vh]'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={animate}
            className='table'
          >
            <h1 className='text-2xl font-medium mb-5'>Saved Domains</h1>
            <DomainRow domain={`www.${name}.com`} price={0.99} />
            <DomainRow domain={`www.${name}.co.uk`} price={0.99} />
            <DomainRow domain={`www.${name}.net`} price={2.99} />
          </motion.div>
        </div>
      ) : (
        <div className='flex-1 grid place-items-center p-3 min-h-[80vh]'>
          <div className='text-center'>
            <img 
              className='w-36 mx-auto'
              src="/images/Nomads.png" 
              alt=""
            />
            <p className='text-sm italic'>Search for ideal domain</p>
          </div>
        </div>
      )}
    </div>
  );
}
