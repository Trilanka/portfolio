import React from 'react'
import { Button } from './ui/MovingBorders'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { LinkIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20 " id='contact'>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:mx-w-[45vw]">
          Ready to <span className='text-purple'>Elevate</span> Your Digital Experience?
          </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          I create scalable, high-performance solutions that drive results. Let&apos;s collaborate to bring your ideas to life with cutting-edge technology.
        </p>
        
        
        <a href="https://www.linkedin.com/in/trilanka-beddegama-245359192/">
        <MagicButton 
          title={"Let's Get In Touch"} 
          icon={<LinkIcon className="h-6 w-6 text-blue-700" />} 
          position={'right'} 
        />
      </a>
      
      </div>

      
      
    </footer>
  )
}

export default Footer
