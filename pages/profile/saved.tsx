import { collection, DocumentData, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import IsAuth from '../../components/IsAuth';
import SavedRow from '../../components/SavedRow';
import { AuthContext } from '../../context/auth.context';
import { db } from '../../firebase';

export default function saved() {
  const { user } = useContext(AuthContext);
  const [saved, setSaved] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (user) {
      const unsubcribe = onSnapshot(
        query(collection(db, "users", user.id, "domains")),
        (snapshot) => setSaved(snapshot.docs.map(doc => doc.data()))
      );
  
      return () => {
        unsubcribe();
      };
    }
  }, [db]);
  

  return (
    <IsAuth isAuth={true}>
      <div className='flex-1 px-1 py-3 bg-gray-50 min-h-[80vh]'>
        <div className='table'>
          <h1 className='text-2xl font-medium mb-5'>Saved Domains</h1>
          {saved.map(({ name }, i) => (
            <SavedRow key={i.toString()} domain={name} />
          ))}
          {console.log(saved)}
        </div>
      </div>
    </IsAuth>
  );
}
