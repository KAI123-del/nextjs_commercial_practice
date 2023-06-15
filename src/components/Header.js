import React from 'react'
import Image from 'next/image'


function Header() {
    return (
        <div className='flex justify-between items-center bg-white px-[2rem] py-[0.5rem] '>

            {/* left section (logo) */}

            <div >
                <Image
                    src={'/logo.png'}
                    priority={true}
                    alt=''
                    width={100}
                    height={60}
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Right Section */}
            <div className='lg:flex hidden justify-center items-center text-[#6C6C6C] space-x-8 '>
                <p className='cursor-pointer'>Product & Solution</p>
                <p className='cursor-pointer'>About Us</p>
                <p className='cursor-pointer' >Contact Us</p>
                <p className='cursor-pointer text-white px-4 py-1 rounded-lg bg-[#3C68FF]'>Request Quote</p>
            </div>


        </div>
    )
}

export default Header