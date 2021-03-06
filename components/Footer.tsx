import React from 'react';

export default function Footer() {
  return (
    <div className='bg-[#031A4A] dark:bg-slate-800 text-white px-5 py-16'>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 text-sm">
        <img 
          className='h-5 col-span-2 sm:col-span-4 md:col-span-1'
          src="https://www.fasthosts.co.uk/img/logos/logo.svg" 
          alt="Fasthosts Logo" 
        />

        <div className='space-y-3 my-5 md:my-0 '>
          <h4 className='font-semibold mb-5 text-lg'>Who are we</h4>
          <p>About us</p>
          <p>Affiliates</p>
          <p>Sponsorship</p>
        </div>
        <div className='space-y-3 my-5 md:my-0 '>
          <h4 className='font-semibold mb-5 text-lg'>Quick links</h4>
          <p>Case Studies</p>
          <p>Careers</p>
          <p>Guides</p>
          <p>Blog</p>
          <p>Business Hub</p>
          <p>Referral Scheme</p>
          <p>Sitemap</p>
        </div>
        <div className='space-y-3 my-5 md:my-0 '>
          <h4 className='font-semibold mb-5 text-lg'>Legal</h4>
          <p>Privacy notice</p>
          <p>Terms of Service</p>
          <p>Tax strategy</p>
          <p>Cookie policy</p>
          <p>Modern Slavery Statement</p>
        </div>
        <div className='space-y-3 my-5 md:my-0 '>
          <h4 className='font-semibold mb-5 text-lg'>Support</h4>
          <p>Contact us</p>
          <p>Sales</p>
          <p>Support</p>
          <p>Support site</p>
        </div>
      </div>
    </div>
  );
}
