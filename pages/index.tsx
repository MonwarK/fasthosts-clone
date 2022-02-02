import Head from 'next/head';
import { SearchIcon } from "@heroicons/react/solid";
import FeatureCard from '../components/FeatureCard';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [domainName, setDomainName] = useState("");
  const router = useRouter();

  const search = () => {
    const name = domainName.split(' ').join('').toLowerCase();
    if (!name) return;
    
    router.push({
      pathname: '/domains',
      query: { name }
    })
  }

  return (
    <div className='flex-1'>
      <Head>
        <title>Fasthosts | The Number 1 Domain Name Provider</title>
      </Head>

      <div className='relative h-[90vh] text-white bg-[#001C53]'>
        <img
          className='absolute object-cover object-right top-0 right-0 bg-[#001C53] h-full z-0' 
          src="https://www.fasthosts.co.uk/img/new-images/brand/homepage-header.svg" 
          alt="" 
        />

        <div className="grid md:grid-cols-2 max-w-7xl mx-auto relative h-full ">
          <div className='z-10 px-10 mt-[15%]'>
            <h1 className='font-bold text-5xl mb-5'>Host. Build. Scale.</h1>
            <p className='text-xl mb-10'>Tech doesn’t have to be complex. We’ll help you keep it simple with our flexible resources, reliable performance and round-the-clock support from real people.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className='bg-white flex justify-between p-1 rounded-md space-x-2'>
              <input 
                onChange={(e) => setDomainName(e.target.value)}
                className='flex-1 outline-none text-gray-600 px-2' 
                type="text"
                placeholder='Search for your perfect domain here'
              />
              <button onClick={search} className='primary-button w-auto px-4 py-2'>
                <SearchIcon className='h-8' />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:absolute lg:left-0 lg:right-0 lg:-top-48 px-5'>
          <FeatureCard 
            title='WordPress Hosting'
            price={1}
            description='Get set up instantly with the world’s most popular content management system, with scalable performance.'
            buttonText='Discover WordPress'
            disabled
          />
          <FeatureCard 
            title='Cloud Servers'
            price={15}
            description='Fully flexible servers with scalable resources. Configure your own specs and get down-to-the-minute billing.'
            buttonText='Explore Cloud Servers'
            disabled
          />
          <FeatureCard 
            title='Virtual Price Servers'
            price={1}
            description='Scalable servers with dedicated resources, top-notch performance and superfast SSD storage.'
            buttonText='Take it Virtual'
            disabled
          />
          <FeatureCard 
            title='Dedicated Servers'
            price={1}
            description='Get ultimate performance from dedicated resources and top-of-the-line AMD and Intel tech.'
            buttonText='Find your Dedi'
            disabled
          />
        </div> 
      </div>

      <div className='max-w-5xl mx-auto lg:mt-[15%] py-20 text-gray-800'>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
          <img className="h-10" src="https://www.fasthosts.co.uk/img/trustpilot/stars-4.svg" alt="4 Stars on TrustPilot" />
          <p className='text-2xl my-5'>Rated 4/5 based on 3513 reviews</p>
          <img className="h-10" src="https://www.fasthosts.co.uk/img/trustpilot/Trustpilot_brandmark_gr-blk_RGB.svg" alt="TrustPilot Logo" />
        </div>
      </div>

      <div className='bg-gray-100 p-10'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-2'>

          <div className='bg-white rounded-xl md:rounded-r-none md:rounded-l-xl shadow-lg p-10'>
            <h2 className='text-3xl md:text-5xl text-[#031A4A] font-medium leading-tight'><span className='text-blue-600'>Scalable</span> technology that packs a <span className='text-blue-400'>punch</span></h2>
            <p className='my-7'>With dedicated resources and the power of advanced processor technology, our servers are the solution your project has been craving. Get built-in security that keeps your data safe and full root access, right down to your choice of operating system.</p>
            <img src="https://www.fasthosts.co.uk/img/new-images/misc/vps.svg" alt="" />
          </div>

          <div className='grid md:grid-rows-3 gap-2'>
            <div className='bg-[#031A4A] rounded-xl md:rounded-l-none md:rounded-r-xl overflow-hidden text-white px-10 py-5 grid place-items-center shadow-xl'>
              <div>
                <h3 className='font-semibold text-2xl'>Cloud Servers</h3>
                <p className='my-5'>Fully flexible servers with scalable resources. Configure your own specs and get down-to-the-minute billing.</p>
                <button disabled className='white-button'>COMING SOON</button>
              </div>
            </div>
            <div className='bg-[#1473E6] rounded-xl md:rounded-l-none md:rounded-r-xl overflow-hidden text-white px-10 py-5 grid place-items-center shadow-xl'>
              <div>
                <h3 className='font-semibold text-2xl'>Virtual Private Servers</h3>
                <p className='my-5'>Scalable servers with dedicated resources, top-notch performance and superfast SSD storage.</p>
                <button disabled className='white-button'>COMING SOON</button>
              </div>
            </div>
            <div className='bg-white rounded-xl md:rounded-l-none md:rounded-r-xl overflow-hidden px-10 py-5 grid place-items-center shadow-xl'>
              <div>
                <h3 className='font-semibold text-2xl'>Dedicated Servers</h3>
                <p className='my-5'>Get ultimate performance from dedicated resources and top-of-the-line AMD and Intel tech.</p>
                <button disabled className='primary-button w-auto px-6 text-sm'>COMING SOON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
