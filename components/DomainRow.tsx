import { doc, getDoc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { db } from '../firebase';

interface Props {
  domain: string,
  price: number
}

type Info = {
  name: string
}

export default function DomainRow({ domain, price } : Props) {
  const { user } = useContext(AuthContext);

  const addToSaved = async () => {
    const info : Info = {
      name: domain
    }

    const docRef = doc(db, "users", user.id, "domains", domain);
    setDoc(docRef, info);
  }

  return (
    <tr className='grid grid-cols-3 my-5'>
      <td className='text-left'>{domain}</td>
      <td>£{price}</td>
      <td className='text-right'>
        <button onClick={addToSaved} disabled={!user} className='primary-button px-7 max-w-[150px]'>Add to Wishlist</button>
      </td>
    </tr>
  );
}
