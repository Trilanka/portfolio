import React from 'react'
import Image from 'next/image';

const Alead = () => {
  return (
    <div className='overflow-auto pl-40 pb-4 pt-4 lg:mb-35 items-center w-full'>
        <div className='flex flex-wrap pt-20 '>
            <div className='flex items-center'>
                <h1 className='text-violet-300 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                    a leader to count on..
                </h1>
            </div>
        </div>

        <div className='w-full flex-wrap  pl-8 pt-12'>
            <div className='flex gap-8 w-full'>
                <p className="my-2 w-1/2 py-6 px-4 font-light tracking-tighter lg:items-start">
                I was a passionate volunteer throughout my undergrad, leading over 15 projects as chairperson and serving as the 
                president of IEEE UoP. What I discovered through these experiences is that one of my greatest strengths is working 
                with people.
                </p>
                <div className='ml-20'>
                <Image 
                src="/lead.jpg" 
                alt="Leadership experience" 
                className='w-auto h-80 max-w-full max-h-full object-contain rounded-xl'
                width={400}
                height={320}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Alead
