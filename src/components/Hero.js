"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

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
        <div className='mt-8  pb-[8rem] md:pb-[10rem] lg:pb-[12rem] xl:pb-[18rem] relative'>
            <p data-aos="fade-up" className='flex justify-center items-center font-[700] md:text-[2rem] text-[1.5rem] lg:text-[2.75rem]'>Products</p>

            {/* PRODUCT DESCRIPTION */}
            <div className='xl:px-[10rem] lg:px-[5rem] md:px-[4rem] px-[2rem]'>

                {/* DESKTOP */}
                <div className='md:grid grid-cols-8 mt-8 '>

                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/mac.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Desktop</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Browse our extensive selection of desktop computers to see products from top brands like Acer, Apple, HP, Lenovo, and more. Superior performance, unbeatable reliability, and advanced features with no compromise. Buy Desktop Computers Online at Best Prices at Truseve for the best price now!</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/appleLogo.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/acer.png'}
                                priority={true}
                                alt=''
                                width={50}
                                height={25}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>

                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/appleLogo.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/acer.png'}
                                priority={true}
                                alt=''
                                width={45}
                                height={25}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden  md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/mac.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* LAPTOPS */}
                <div className='md:grid grid-cols-8 mt-16'>

                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/lappy3.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden  md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/lappy3.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5 space-y-4 lg:space-y-6'>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Laptops</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Work from home made simple! Check out our enormous selection of top laptop brands, packed with cutting-edge features for you! Shop online at the most trusted store in India and Get the best laptop deals now.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>

                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />





                        </div>
                    </div>

                </div>

                {/* workstations */}
                <div className='md:grid grid-cols-8 mt-16 '>

                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/cpu.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Workstation</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Experience superior performance and efficiency with our top-of-the-line workstations from leading brands, designed to handle intensive tasks and boost productivity in your professional environment.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/cpu.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* MONITORS */}
                <div className='md:grid grid-cols-8 mt-16  '>

                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/lappy3.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden  md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/lappy3.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5 space-y-4 lg:space-y-6'>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Monitors</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Watch, play, live in style. Shop for Top Quality Computer Monitors Online at pocket friendly prices from truseve’s collection of Top brand Monitors. Our monitors provide a superior viewing experience for work or entertainment, thanks to crisp image quality and advanced display technologies.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                </div>

                {/* printer */}
                <div className='md:grid grid-cols-8 mt-16 '>
                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/printer1.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Printers</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>With our reliable printers with all new features, fast printing speeds, and effortless connectivity, you can now streamline document management and get prints of professional quality. Choose from our widest range of Printers like All-In-One Printers, Laser Printers, Inkjet Printers, Ink Cartridges, HP printers from the top brands like Canon, HP, Epson & more.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>
                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/printer1.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* scanner */}
                <div className='md:grid grid-cols-8 mt-16  '>
                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/scanner.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/scanner.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Scanners</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Shop online for document scanner machines at best price now. Digitise your documents and streamline your workflow with our adaptive scanners, that offer high-resolution scanning, fast processing, and intelligent features for efficient document management.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                </div>

                {/* speakers */}
                <div className='md:grid grid-cols-8 mt-16 '>
                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/speaker.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Speakers</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Listening to music or watching a movie becomes more enjoyable when the audio quality is perfect. Buy Speakers online at best prices in India from top brands now. Our premium speakers will enhance your audio experience, deliver exceptional audio quality for music, movies, and presentations.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>
                    {/* right section */}
                    <div data-aos="fade-up"  className='md:col-span-3 hidden md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/speaker.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>


                </div>

                {/* Television */}
                <div className='md:grid grid-cols-8 mt-16  '>
                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/Led.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/Led.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Television</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Immerse yourself in stunning visuals with our high-resolution monitors. Now Buy Latest LED TV, 4K TVs & Smart Televisions online at India's Best Online seller. Choose from trusted brands like LG, Panasonic, Samsung, Sony, etc.,.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                </div>

                {/* Webcam */}
                <div className='md:grid grid-cols-8 mt-16 '>
                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/camera.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Webcam</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Stay connected and engaged in video conferences with our high-definition webcams, designed to deliver clear visuals and crisp audio for seamless communication. Buy Webcams now online at low prices possible.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>
                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/camera.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Ups */}
                <div className='md:grid grid-cols-8 mt-16  '>
                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/ups.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/ups.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>UPS</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Ensure uninterrupted power supply and protect your valuable equipment with our reliable UPS solutions. Safeguard against power outages and voltage fluctuations to keep your systems running smoothly. Now shop for top-notch UPS products at an affordable price from Truseve, a 100% authentic and reliable reseller brand in India</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                </div>

                {/* paper shredder */}
                <div className='md:grid grid-cols-8 mt-16 '>
                    <div data-aos="fade-up" className='md:hidden w-[100%] h-[100px] mb-24 flex justify-end '>
                        <div className=' w-[100%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/washingMachine.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Paper Shredder</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Explore a huge range of paper shredders from top trusted brands in India. Safeguard your sensitive information with our efficient paper shredders. Dispose of confidential documents securely, preventing unauthorized access and maintaining data privacy. Get exciting deals now with fast delivery.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>
                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-end '>
                        <div className=' w-[75%]  relative'>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/rightGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/washingMachine.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* mobiles */}
                <div className='md:grid grid-cols-8 mt-16  '>
                    <div data-aos="fade-up" className='md:hidden  w-[100%] h-[100px] mb-24 flex justify-center '>
                        <div className=' w-[100%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[150px] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-[150px] flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/iPhone.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* left section */}
                    <div data-aos="fade-up" className='md:col-span-3 hidden md:flex justify-start '>
                        <div className=' w-[75%]  relative  '>
                            <p className='absolute top-0 w-[100%] h-[100%] -z-10 '>
                                <Image
                                    src={'/leftGlass.png'}
                                    priority={true}
                                    alt=''
                                    fill
                                    style={{ objectFit: 'fill' }}
                                />
                            </p>
                            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <p className='relative z-10 w-3/4 h-3/4'>
                                    <Image
                                        src={'/iPhone.png'}
                                        priority={true}
                                        alt=''
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div data-aos="fade-up" className='md:col-span-5  space-y-4 lg:space-y-6 '>
                        <p className='lg:text-[1.2rem] text-[1.1rem] font-[600] text-center md:text-start'>Mobiles</p>
                        <p className='text-[#6C6C6C] lg:text-[1rem] text-[0.8rem] text-center md:text-start'>Find the best mobile phones online in India at the lowest prices and great discounts from popular brands like Samsung, OnePlus, Apple, Motorola, and others.</p>
                        <p className='font-[600] lg:text-[1.2rem] text-[1.1rem] text-center md:text-start'>Brands we deal</p>
                        <div className='lg:flex hidden mt-2 space-x-4'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={35}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />



                        </div>
                        <div className='lg:hidden flex justify-center md:justify-start mt-2 space-x-3'>

                            <Image
                                src={'/hp.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                            <Image
                                src={'/dell.png'}
                                priority={true}
                                alt=''
                                width={25}
                                height={20}
                                style={{ objectFit: 'contain' }}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero