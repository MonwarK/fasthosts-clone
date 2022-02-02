import React from 'react';
import { useContext } from 'react';
import IsAuth from '../../components/IsAuth';
import ProfileCard from '../../components/ProfileCard';
import { AuthContext } from '../../context/auth.context';

export default function index() {
  const { user, logOut } = useContext(AuthContext);
  
  return (
    <IsAuth isAuth={true}>
      <div className='flex-1 grid place-items-center px-1 py-3 bg-gray-50 text-center min-h-[80vh]'>
        <div>
          <h1 className='text-2xl mb-10'>Hello {user?.name}</h1>
          <div className='grid grid-cols-3 gap-3 my-2'>
            <ProfileCard link='/' option='Settings' />
            <ProfileCard link='/profile/saved' option='Saved Domains' />
            <div onClick={logOut}>
              <ProfileCard link='/login' option='Sign Out' />
            </div>
          </div>
        </div>
      </div>
    </IsAuth>
  );
}
