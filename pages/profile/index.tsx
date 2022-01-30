import React from 'react';
import ProfileCard from '../../components/ProfileCard';

export default function index() {
  return (
    <div className='flex-1 grid place-items-center px-1 py-3 bg-gray-50 text-center min-h-[80vh]'>
      <div>
        <h1 className='text-2xl mb-10'>Hello Monwar Khan</h1>
        <div className='grid grid-cols-3 gap-3 my-2'>
          <ProfileCard link='/' option='Settings' />
          <ProfileCard link='/profile/saved' option='Saved Domains' />
          <ProfileCard link='/login' option='Sign Out' />
        </div>
      </div>
    </div>
  );
}
