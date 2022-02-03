import Link from 'next/link';
import React from 'react';

interface Props {
  option: string,
  link: string
}

export default function ProfileCard({ option, link } : Props ) {
  return (
    <Link href={link}>
      <div className='w-full h-32 bg-white dark:bg-gray-700 hover:bg-gray-50 duration-150 cursor-pointer shadow-lg hover:shadow-xl rounded-lg grid place-items-center font-semibold p-3'>
        <h3>{option}</h3>
      </div>
    </Link>
  );
}
