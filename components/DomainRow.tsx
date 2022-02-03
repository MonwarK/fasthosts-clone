import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { SavedContext } from '../context/saved.context';

interface Props {
  domain: string,
  price: number
}

export default function DomainRow({ domain, price } : Props) {
  const { addToSaved, saved } = useContext(SavedContext);
  const { user } = useContext(AuthContext);

  const isSaved = saved.filter((item:any) => item.name === domain) 

  return (
    <tr className='grid grid-cols-3 my-5'>
      <td className='text-left'>{domain}</td>
      <td>£{price}</td>
      <td className='text-right'>
        <button onClick={() => addToSaved(domain)} disabled={!user || isSaved.length > 0} className='primary-button px-7 max-w-[150px]'>{isSaved.length > 0 ? "ADDED" : "Add to Wishlist"}</button>
      </td>
    </tr>
  );
}
