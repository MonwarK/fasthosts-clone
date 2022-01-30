import React from 'react';

export default function SavedRow() {
  return (
    <div className='flex justify-between items-center my-5'>
      <p>www.monwar.com</p>
      <p>
        <button className='bg-red-600 px-5 py-2 rounded-md text-white font-medium'>Remove</button>
      </p>
    </div>
  );
}
