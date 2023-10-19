import React from 'react'
import CoverImage from '../assests/templates/mockup.png'

export default function ComingSoon() {
  return (
    <>
  <div className="relative overflow-hidden">
    <div className="bg-white lg:overflow-hidden ">
      <div className="mx-auto max-w-5xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block text-[#4dd583] text-[30px] pb-5">We're building</span>
                <span className="block text-black text-[50px]">Something excited</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Our Website will launch soon. We are building a great user experience for building resumes and cover letters
              </p>
              <div className="mt-10 sm:mt-12">
                {/* This is a working waitlist form. Create your access key from https://web3forms.com/s to setup.  */}
              
                  <div className="sm:flex">
              
                    {/* <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        defaultValue=""
                        autoComplete="off"
                      />
                    </div> */}
                     <div className=""><a className='hover:no-underline ' href="https://sheikhtabarak.me/">
                      <button
                      
                        href="https://sheikhtabarak.me/"
                        className="block w-full rounded-md hover:underline-0 bg-[#4dd583] py-3 px-4 font-medium text-white shadow hover:bg-[#4dd583] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Stay in touch  
                    </button></a>
                    </div>
                   
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-12 hidden lg:block">
            <img
              className=""
              src={CoverImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>
  )
}
