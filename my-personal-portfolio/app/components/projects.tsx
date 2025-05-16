
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div >
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       My projects are given bellow that I have created for my learning and personal Experience. Some of these are created using pure html, css and Js and Some are creaed using Reactjs/Nextjs , Tailwind CSS and Bootstrap.
      </p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-12">

           {/* Project 01 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/resume builder.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Editable and shareable Dynamic Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shareable Dynamic Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is a simple editable, shareable dynamic Resume builder that can be downloaded in pdf.
            </p>
            <Link target='_blank' href={'https://giaic-hackathon-1-milestone-05-shareable-resume-buil-pjx20lccz.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

        {/* Project 02 */}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/facebook clone.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Facebook Log in Page Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Facebook Log in Page
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is a Facebook log in page clone that is created using Next.js and Tailwind CSS
            </p>
            <Link target='_blank' href={'https://facebookloginpage-ui-clonebymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

         {/* Project 03 */}
         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/todo image.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Todo List using Reactjs & Tailwind CSS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Todo List 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is a Todo list that is created using React.js and Tailwind CSS
            </p>
            <Link target='_blank' href={'https://todo-list-using-reactjsbymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

       {/* Project 04 */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/password gen.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Password Generator using Reactjs
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Password Generator
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is a Password Generator that is created using React.js and Tailwind CSS
            </p>
            <Link target='_blank' href={'https://password-generator-using-reactjsbymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

        {/* Project 05 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/password generator.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Passward Generator 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Passward Generator 
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is a simple frontend project(passward Generator) that is created using pure html, CSS and Javascript
            </p>
            <Link target='_blank' href={'https://password-generatorbymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* project 06 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/simple calculator.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Simple Calculator 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is a simple Calculator application that is created using pure html, CSS and Javascript
            </p>
            <Link target='_blank' href={'https://simple-calculatorbymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
         {/* Project 07 */}
         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/simple analog clock.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Simple Analog Clock
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Analog Clock
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is a simple frontend project(analog clock) that is created using pure html, CSS and Javascript
            </p>
            <Link target='_blank' href={'https://analog-clock-2bymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
         {/* Project 08 */}
         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/pictures/stop watch.png"
            width={600}
            height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Stop Watch
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Stop Watch
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is a simple frontend project(stop watch) that is created using pure html, CSS and Javascript
            </p>
            <Link target='_blank' href={'https://stop-watchbymuhammadraheem.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
