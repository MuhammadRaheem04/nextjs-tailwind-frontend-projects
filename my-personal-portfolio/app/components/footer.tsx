'use client'
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src="/assets/logo.png" alt='logo' width={100} height={100}
                   className='w-14 rounded-full'
                   />
      <span className="ml-3 text-xl">Raheem — Web Developer </span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Code With Raheem —
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blamk' href={'https://web.facebook.com/profile.php?id=100053517740486'} className="text-gray-500">
      <BsFacebook className='text-3xl hover:text-[#3b5998]'/>
      </Link>
      <Link target='_blank' href={'https://www.instagram.com/muhammad04rahim03s/'} className="ml-3 text-gray-500">
      <BsInstagram className='text-3xl hover:text-[#8a3ab9]'/>
      </Link>
      <Link target='_blank' href={'https://www.linkedin.com/in/muhammad04raheem/'} className="ml-3 text-gray-500">
      <BsLinkedin className='text-3xl hover:text-[#0e76a8]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
