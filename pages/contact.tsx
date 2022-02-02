import Head from 'next/head';
import React from 'react';

export default function contact() {
  return (
    <div className='flex-1 min-h-[80vh] text-[#031A4A] font-medium max-w-4xl mx-auto px-8 py-10'>
      <Head>
        <title>Contact us | Fasthosts</title>
      </Head>
      <h1 className='text-7xl font-semibold text-blue-500'>Contact us</h1>
      <p className='my-5'>We welcome your feedback to help us to continue to provide our customers with the best possible experience.</p>

      <div className='grid md:grid-cols-2 gap-3'>
        <div className='space-y-5'>
          <div>
            <h2 className='text-3xl font-bold mb-2'>Support</h2>
            <div className='text-gray-500 font-medium text-sm'>
              <p>Contact Fasthosts Support 24/7 by calling 0333 0142 700</p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-2'>Sales</h2>
            <div className='text-gray-500 font-medium text-sm'>
              <p>Contact Fasthosts Support 24/7 by calling 0333 0142 700</p>
              <p>Email sales sales@fasthosts.co.uk</p>
              <p className='mt-3'>Please note: The Sales Team are unable to respond to Technical Support, Account Closures or Billing requests.</p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-2'>Stay safe online</h2>
            <div className='text-gray-500 font-medium text-sm'>
              <p>For security reasons please DO NOT transmit details of any credit/debit card using any of the following methods as the security cannot be guaranteed:</p>
              <ul className='p-4 list-disc'>
                <li>By fax</li>
                <li>Through the post</li>
                <li>Via any electronic means e.g. email, chat, social media</li>
                <li>In support tickets</li>
              </ul>
              <p>Please use your customer control panel for managing credit/debit cards.</p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-2'>Domain owners (Registrants)</h2>
            <div className='text-gray-500 font-medium text-sm'>
              <p>If your domain name is shown as being on the LIVEDOMAINS tag when doing a WHOIS query via www.nic.uk this confirms that Fasthosts Internet Limited are the registrar for your domain name.</p>
              <p className='my-2'>If you do not currently hold an account directly with Fasthosts:</p>
              <ul className='mb-4 list-disc px-4 text-blue-500'>
                <li>For general enquiries click here</li>
                <li>To raise a complaint click here</li>
              </ul>
              <p>You will receive a response to your enquiry or complaint within the next 3 working days.</p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-2'>Domain release process</h2>
            <div className='text-gray-500 font-medium text-sm'>
              <p>If you have purchased a domain through one of our resellers and are experiencing issues contacting them, please follow our domain release procedure</p>
            </div>
          </div>
        </div>
        <div>
          <div className='p-2 border-2 border-blue-500'>
            <img 
              className='w-full'
              src="https://www.fasthosts.co.uk/sites/fasthosts.co.uk/files/fasthosts-map.png" 
              alt="" 
            />
            <div className='bg-gray-100 p-2 text-gray-500 text-sm'>
              <p>Need to contact our switchboard?</p>
              <p>call +44 (0)1452 541 285</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
