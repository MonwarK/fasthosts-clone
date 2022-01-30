import React from 'react';

export default function about() {
  return (
    <div className='flex-1'>
      <div className='h-96 relative flex items-center px-2'>
        <img 
          className='w-full h-full z-10 object-cover absolute top-0 left-0'
          src="https://www.fasthosts.co.uk/sites/all/themes/fh_omega_sub_01/css/img_v3/background-about-hero-datacentre-mobile.jpg" 
          alt=""
        />
        <div className='z-10 max-w-4xl w-full mx-auto px-5'>
          <p className='text-gray-300 italic text-3xl'>What makes us who we are</p>
          <h1 className='text-white font-semibold text-6xl'>About us</h1>
        </div>
      </div>

      <div className='max-w-4xl mx-auto grid md:grid-cols-2 text-[#031A4A] p-5'>
        <h1 className='text-4xl my-5 sm:col-span-2'>Winning technology and support</h1>
        <div>
          <p className='font-medium mb-5'>Since 1999, Fasthosts has been designing new ways to give customers everything they need to manage and control their online space. Innovation drives everything we do, ensuring we offer the latest internet technology across our range of services including domain names, shared web hosting, business-class email, dedicated servers, cloud servers, secure online storage and online backup. We also maintain a highly successful reseller channel.</p>
          <p className='font-medium mb-5'>Based in the UK and operating 24/7 from our dedicated UK data centres, we keep over a million domains running smoothly and ensure over 42 million emails are delivered safely each day. All our services can be self-managed through the award-winning Fasthosts Control Panel. By focusing on the needs of our customers and employing great people, we've created a profitable, fast moving and market-leading organisation.</p>
        </div>
        <img 
          className='w-full md:h-72 object-contain'
          src="https://www.fasthosts.co.uk/sites/fasthosts.co.uk/files/about-winning.jpg" 
          alt="" 
        />
      </div>
    </div>
  );
}
