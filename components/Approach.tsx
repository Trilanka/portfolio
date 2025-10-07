import React from 'react'

const Approach = () => {
  return (
    <div className='items-center justify-center'>
      <div className='py-40 '>
        <h1 className='heading'>My Tech Approach On <span className='text-purple'>Software Engineering</span></h1>
      </div>

      <div className='flex justify-center items-center '>
        <div className=' h-full relative pt-30 flex flex-col w-1/2 gap-y-6 items-center justify-center gap-x-4'>
          <div className='flex lg:items-center lg:justify-center sm:items-start justify-center sm: items-start sm:justify-start'>
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-black"></div>
          </div>
          <div className='text-black-200 gap-4'>
            <div className=' w-1/2 rounded-xl flex flex-col lg:items-end pr-8 border border-rose-400  text-center'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter mb-4 md:text-xl sm:text-lg'>Data structures and Algorithms</h1>
              <p className=' text-violet-300 font-light tracking-tighter pt-5 text-right'>
                i am believing any engineering field needs the basic of what its built on so
                i am focusing data structures and algorithms more to get a solid foundation
                i am thinking of building my career. 
              </p>
            </div>
            <div className='w-1/2 rounded-xl ml-auto pl-8' >
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>System Design</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              As an engineer, I believe it is essential to have skills in not just implementation, but also in planning and design. 
              That is why I am studying system design theories to gain the knowledge and tools needed to effectively design complex
              systems. 
              </p>
            </div>
            <div className='w-1/2 rounded-xl flex flex-col items-end pr-8 text-right'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Programming Language</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              I believe it is crucial to not only understand how to implement solutions but also to have a deep understanding of 
              the programming languages behind them. That is why I am continually learning and refining my skills in various 
              programming languages.
              </p>
            </div>
            <div className='w-1/2 rounded-xl ml-auto pl-8'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Frameworks</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              I know that mastering frameworks is just as important as learning the core concepts. I actively study 
              and work with various frameworks to streamline development and build more efficient, scalable solutions. 
              </p>
            </div>
            <div className='w-1/2 rounded-xl pr-8 flex flex-col items-end text-right'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Testing</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              I understand that thorough testing is vital for building reliable software. 
              I am dedicated to learning different testing methodologies and tools to ensure 
              that my projects are robust and error free. 
              </p>
            </div>
            <div className='w-1/2 rounded-xl ml-auto pl-8'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Version Control</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              I believe that efficient project management is key, and version control plays a crucial role in this. 
              By learning version control systems like Git, I am enhancing my ability to manage codes.
              </p>
            </div>
            <div className='w-1/2 rounded-xl pr-8 flex flex-col items-end text-right'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Database</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'> 
              I am committed to learning and mastering database concepts to ensure data is stored efficiently and securely, 
              and to optimize data retrieval and management for scalable solutions. 
              </p>
            </div>
            <div className='w-1/2 rounded-xl ml-auto pl-8'>
              <h1 className='text-white-200 font-bold text-xl tracking-tighter'>Containerization</h1>
              <p className='text-violet-300 font-light tracking-tighter pt-5'>
              I am dedicated to learning 
              containerization technologies like Docker to streamline development, simplify deployment, and ensure 
              that applications run smoothly across different environments. 
              </p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Approach
