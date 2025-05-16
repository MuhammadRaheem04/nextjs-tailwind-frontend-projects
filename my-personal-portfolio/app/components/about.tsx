
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
            className="object-cover object-center rounded mx-auto w-[300px] md:w-[350px] h-[400px]"
            alt="hero"
            width={500}
            height={600}
            src="/assets/pictures/Profile Picture.jpg"
          />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me 
        <br className="inline-block"/>
        Hi I&#39;m <span className='text-blue-600 '> Muhammad Raheem </span>
      </h1>
      <p className="mb-4 leading-relaxed">
        I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 01 year.
      </p>
      <p className="mb-4 leading-relaxed">
      My journey in IT began in 2023 since then, I&#39;ve had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.
      </p>
      <p className="mb-6 leading-relaxed">
      I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.
      </p>
      <div className="flex justify-center">
       <a target='_blank' href="https://giaic-1st-hackathon-milestone-01-static-resume-builder.vercel.app/">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         View CV 
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
