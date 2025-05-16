
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BiSolidDownload } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='bg-white z-50 sticky top-0'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                   <Image src="/assets/logo.png" alt='logo' width={100} height={100}
                   className='w-14 rounded-full'
                   />
                        <span className="ml-3 text-xl">Muhammad Raheem</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="font-medium mr-5 hover:text-blue-600">Home</Link>
                        <Link href="/pages/about" className="font-medium mr-5 hover:text-blue-600">About</Link>
                        <Link href="/pages/skills" className="font-medium mr-5 hover:text-blue-600">Skills</Link>
                        <Link href="/pages/projects" className="font-medium mr-5 hover:text-blue-600">Projects</Link>
                        <Link href="/pages/contact" className="font-medium mr-5 hover:text-blue-600">Contact</Link>
                    </nav>
                    <a target='_blank' href="https://giaic-1st-hackathon-milestone-01-static-resume-builder.vercel.app/">
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 font-bold focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                         Download CV 
                    <BiSolidDownload className='text-xl ml-2'/>
                    </button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Navbar
