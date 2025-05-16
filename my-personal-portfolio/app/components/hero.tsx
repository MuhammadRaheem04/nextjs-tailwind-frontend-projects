
'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (

    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Web developer', 'AI Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[100px] h-[2px] bg-blue-700'></div>
          <p className="mb-8 leading-relaxed">
            I am a passionate Frontend Developer with a strong background in Web Development, I have been crafting digital experiences for 01 year.
            My journey in IT began in 2023 since then, I&#39;ve had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.
            I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.
          </p>
          <div className="flex justify-center">
            <Link href={'/pages/contact'}>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full mx-auto w-[15rem]"
            alt="hero"
            width={500}
            height={500}
            src="/assets/pictures/Profile Picture.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
