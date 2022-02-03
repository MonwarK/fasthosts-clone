import { DocumentData } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';
import IsAuth from '../../components/IsAuth';
import SavedRow from '../../components/SavedRow';
import { SavedContext } from "../../context/saved.context";

export default function saved() {
  const { saved } : any = useContext(SavedContext);

  return (
    <IsAuth isAuth={true}>
      <Head>
        <title>Saved Domains | Fasthosts</title>
      </Head>
      <div className='flex-1 px-1 py-3 bg-gray-50 dark:bg-gray-900 min-h-[80vh]'>
        {saved.length > 0 && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className='table'
          >
            <h1 className='text-2xl font-medium mb-5'>Saved Domains</h1>
            {saved.map((item: any, i: { toString: () => React.Key | null | undefined; }) => (
              <SavedRow key={i.toString()} domain={item.name} />
            ))}
          </motion.div>
        )}
      </div>
    </IsAuth>
  );
}
