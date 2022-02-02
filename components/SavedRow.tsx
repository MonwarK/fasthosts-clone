import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { db } from '../firebase';

interface Props {
  domain: string,
} 

export default function SavedRow({ domain } : Props) {
  const { user } = useContext(AuthContext);

  const deleteDomain = async () => {
    await deleteDoc(doc(db, "users", user.id, "domains", domain));
  }

  return (
    <div className='flex justify-between items-center my-5'>
      <p>{domain}</p>
      <div>
        <button onClick={deleteDomain} className='bg-red-600 px-5 py-2 rounded-md text-white font-medium text-xs'>Remove</button>
      </div>
    </div>
  );
}
