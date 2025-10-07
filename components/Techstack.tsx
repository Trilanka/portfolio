import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const Techstack = () => {
  return (
    <div className='border-b border-neutral-800 pb-40'>
        <h1 className="heading py-40">
            My Technology <span className="text-purple">Stack</span>
      </h1>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl '/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500'/>
        </div>
        
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </div>
      </div>
    </div>
  )
}

export default Techstack
