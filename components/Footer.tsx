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
          Ready To take <span className='text-pink-300'>your</span> Digital Presence Into Next Level?
          </h1>
        <p className="text-white-200 md:mt-10 text-center">I am a fresh graduate, eager for a chance to prove myself in the field of software engineering.</p>
        
        
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
