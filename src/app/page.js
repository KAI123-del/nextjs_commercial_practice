"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init();

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 200,
        throttleDelay: 99,

        offset: 120,
        delay: 0,
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
}, [])

  return (
    <div className=' font-Montserrat '>

      {/* HEADER GOES HERE */}
      <Header />


      {/* HERO DIV  */}
      <div className='relative w-[100%] md:h-[250px] md:block hidden lg:h-[350px] xl:h-[500px] '>
        <Image
          src={'/headBack.svg'}
          priority={true}
          alt=''
          fill
          style={{ objectFit: 'fill' }}
        />

        {/* absolute items on hero section */}

        <div  className='absolute top-0  w-[100%] lg:pl-[6rem] md:pl-[4rem] xl:pl-[10rem] md:pt-[2rem] lg:pt-[3rem] '>
          <p data-aos="fade-up" className='xl:text-[3rem] lg:text-[2rem] md:text-[1.5rem] font-Montserrat font-[700] text-white '>The Best Hardwares for <br /> Unbeatable Performance,<br /> Customization, and Reliability!</p>
          <p data-aos="fade-up" className='xl:text-[1.1rem] lg:text-[1rem] text-gray-200 tracking-wider md:mt-2 lg:mt-3'>30 years of service in Hardware industry</p>
          <button data-aos="fade-up" className='bg-[#002D58] text-white px-8 py-2 md:mt-[1rem] lg:mt-12'>Connect Now</button>
        </div>
      </div>

      {/* for mobile */}
      <div className='relative w-[100%] h-[650px]  md:hidden '>
        <Image
          src={'/mobHeadBack.png'}
          priority={true}
          alt=''
          fill
          style={{ objectFit: 'fill' }}
        />

        {/* absolute items on hero section */}

        <div data-aos="fade-up" className='absolute top-[30%] ml-5  w-[100%] '>
          <p className=' font-Montserrat font-[700] text-white text-[1.4rem] leading-[3rem] '>The Best Hardwares for <br /> Unbeatable Performance,<br /> Customization, and Reliability!</p>
          <p className=' text-gray-200 tracking-wider mt-12'>30 years of service in Hardware industry</p>
          <button className='bg-[#002D58] text-white px-8 py-2 mt-24'>Connect Now</button>
        </div>
      </div>


      {/* HERO SECTION GOES HERE */}
      <Hero />


      {/* FOOTER GOES HERE */}
      <Footer />


    </div>
  )
}
