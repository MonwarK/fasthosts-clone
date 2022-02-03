import React from 'react';

interface Props {
  title: string,
  price: number,
  description: string,
  buttonText: string,
  disabled?: boolean 
}

function FeatureCard({ title, price, description, buttonText, disabled } : Props) {
  return (
    <div className='bg-white dark:bg-slate-700 px-3 py-8 text-gray-700 dark:text-gray-200 rounded-xl shadow-2xl max-w-xs mx-auto flex flex-col justify-between'>
      <h2 className='font-medium text-2xl mb-5'>{title}</h2>
      <div className='w-20 text-sm'>
        From only <span className='text-red-500 font-medium text-5xl block'>£{price}</span> per month
      </div>
      <p className='my-5'>{description}</p>
      <button disabled={disabled} className='primary-button text-sm'>
        {disabled ? "COMING SOON" : buttonText}
      </button>
    </div>
  );
}

export default FeatureCard;
