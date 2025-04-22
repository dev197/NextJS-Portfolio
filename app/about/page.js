'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import SideNavbar from '@/components/ui/SideNavbar'

const About = () => {
  return (
    <div>
      <div className="bg-black hidden h-screen md:flex flex-col scroll-smooth snap-mandatory snap-x items-center justify-center relative overflow-y-hidden">
        <div className='absolute hidden top-10 md:flex items-center '>
          <p className='text-gray-700'>Swipe Right</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
        </div>
        <div className='h-fit hidden md:flex select-none overflow-auto w-fit absolute  bottom-6 left-7'>
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></script>
          <spline-viewer url="https://prod.spline.design/IhZklh0mGDypHLsd/scene.splinecode"></spline-viewer>
        </div>
        {/* Main Content */}
        <div className="hidden md:flex snap-start flex-row items-center justify-evenly w-full px-8 md:px-20">

          {/* White Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="h-72 w-72 font-sans font-thin text-white"
          > 
          Hi! I'm Dev, a passionate Web Developer with a keen eye for design and a love for creating Interactive websites. As this portfolio reflects my designing and development skills. I like to 
          keep the design minimal and modern with user interactions. I have devloped some projects You can visit on next page. 
            </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
          >
            <div className='hidden md:flex h-[400px] w-80 cursor-pointer overflow-hidden bg-white rounded-[32px]'>
              <div className='flex items-center justify-center'>
                <img src='profile.jpg'/>
              </div>
            </div>

          </motion.div>
          <button className="flex absolute bottom-24 bg-white hover:bg-[#ff0464] hover:fill-white hover:text-white h-11 w-44 text-center justify-center items-center text-xl  px-4 py-2 rounded-3xl">
            <a href="/Resume.pdf" className="flex ">
              My Resume
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className='hover:fill-white'
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </button>
          {/* Navbar (for desktop) */}

        </div>




        {/* Second Page (Resume Button) - UNCHANGED */}
        <div className="absolute hidden snap-start left-full md:flex flex-col items-center justify-center h-screen w-screen">
          <div className='absolute hidden top-10 md:flex items-center '>
            <p className='text-gray-700'>Swipe Left</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#374151"><path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" /></svg>
          </div>
          <div className='flex flex-col w-full space-y-7'>
            <p className='text-white text-6xl text-center px-10 font-serif'>I can help you with</p>
            <div className='flex flex-row items-center justify-evenly'>
              <div className='text-white font-serif space-y-7 w-96'>
                <p className='w-60 border-gray-700 border-b-2'>1</p>
                <p className='text-4xl'>Design</p>
                <p className='font-extralight'>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
              </div>
              <div className='text-white font-serif space-y-7 w-96'>
                <p className='w-60 border-gray-700 border-b-2'>2</p>
                <p className='text-4xl'>Development</p>
                <p className='font-light'>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.</p>
              </div>
            </div>
          </div>
          <div className="select-none absolute bottom-14 w-full">
            <Navbar />
          </div>
        </div>


      </div>


      <div className="md:hidden bg-zinc-600 gap-16 h-fit w-screen flex flex-col items-center justify-center">
        <div className="absolute top-0 w-full md:hidden">
          <SideNavbar/>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center  justify-center text-center px-8"
        >
          <p className="font-sans text-white mt-60">
            Hi! I'm Dev, a passionate Web Developer with a keen eye for design and a love for creating interactive websites. With a strong foundation in React, Next.js, and Tailwind CSS, my journey into development started with creating a simple UI for a blog website, and since then, I've worked on creating websites. I believe in continuous learning and staying updated with the latest tech advancements.
            <br /><br />
            I'm currently open to freelance work or an internship, so feel free to reach out if you have an exciting project in mind!
          </p>
        </motion.div>
        <div className='w-36 flex items-center justify-center absolute top-14 left-5 h-36 rounded-full bg-blue-400 text-white'>
          <p>About me</p>
        </div>
        <div className='flex px-10 flex-col w-full space-y-7'>
          <p className='text-[#ff0464] text-5xl  text-center px-10 font-serif'>I can help you with</p>
          <div className='flex flex-col items-center justify-evenly'>
            <div className='text-white font-serif space-y-7 w-96'>
              <p className='w-60 border-gray-700 border-b-2'>1</p>
              <p className='text-3xl'>Design</p>
              <p className='font-extralight'>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
            </div>
            <div className='text-white font-serif mt-4 space-y-7 w-96'>
              <p className='w-60 border-gray-700 border-b-2'>2</p>
              <p className='text-3xl'>Development</p>
              <p className='font-light'>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.</p>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <button className="flex  bg-white hover:bg-[#ff0464] hover:fill-white hover:text-white h-11 w-44 text-center justify-center items-center text-xl  px-4 py-2 rounded-3xl">
            <a href="/Resume.pdf" className="flex ">
              My Resume
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className='hover:fill-white'
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </button>
        </div>
      </div>

    </div>

  )
}

export default About
