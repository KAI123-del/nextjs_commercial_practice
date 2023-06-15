"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Footer() {

  useEffect(() => {
    AOS.init();

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,

        offset: 120,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
}, [])

  return (
    <div data-aos="fade-up" className='bg-[#E6E8ED] px-[0.5rem] md:px-0 flex md:flex-row flex-col justify-around items-start text-[#494949] pb-[4rem] md:pb-[14rem] rounded-tl-[20px] md:rounded-tl-[50px]'>

      <div className='md:mt-[3.5rem] mt-[2rem] md:block flex md:space-x-0 space-x-6 md:space-y-3'> 
        <p className='cursor-pointer'>Software</p>
        <p className='cursor-pointer'>Hardware</p>
        <p className='cursor-pointer'>Storage & data center</p>
      </div>

      <div className='md:mt-[3.5rem] mt-[1rem] md:block flex space-x-6 md:space-x-0 md:space-y-3'>
        <p className='cursor-pointer'>Networking</p>
        <p className='cursor-pointer'>Security</p>
        <p className='cursor-pointer'>Other Products</p>
      </div>

      <div className='md:mt-[3.5rem] mt-[1rem] md:block flex space-x-6 md:space-x-0 md:space-y-3'>
        <p className='cursor-pointer'>About us</p>
        <p className='cursor-pointer'>Privacy Policy</p>
      </div>

      <div className='md:mt-[3.5rem] mt-[1rem]   md:space-y-3'>
        <p className='cursor-pointer md:block hidden'>Truseve Private limited <br/> No3, Teynampet <br/> chennai</p>
        <p className='cursor-pointer md:hidden'>Truseve Private limited No3, Teynampet  chennai</p>
        <div className='flex md:space-x-2 md:mt-0 mt-[3rem] justify-around'>
          <Image
            src={'/whtsapp.png'}
            priority={true}
            alt=''
            width={25}
            height={20}
            style={{ objectFit: 'contain' }}
          />

          <Image
            src={'/twitter.png'}
            priority={true}
            alt=''
            width={25}
            height={20}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={'/insta.png'}
            priority={true}
            alt=''
            width={25}
            height={20}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={'/fb.png'}
            priority={true}
            alt=''
            width={25}
            height={20}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

    </div>
  )
}

export default Footer