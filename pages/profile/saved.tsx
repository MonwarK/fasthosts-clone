import React from 'react';
import SavedRow from '../../components/SavedRow';

export default function saved() {
  return (
    <div className='flex-1 px-1 py-3 bg-gray-50 min-h-[80vh]'>
      <div className='bg-white shadow-lg max-w-4xl mx-auto w-full text-center rounded-md p-5'>
        <h1 className='text-2xl font-medium mb-5'>Saved Domains</h1>
        <SavedRow />
        <SavedRow />
        <SavedRow />
        <SavedRow />
      </div>
    </div>
  );
}
