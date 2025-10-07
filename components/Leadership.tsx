import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';


const Leadership = () => {
  const cont = [
    {
      id: 1,
      title: 'Collaborative Editing',
      description: `Work together in real time with your team, clients, and stakeholders. Collaborate on 
      documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.`,
    },
    {
      id: 2,
      title: 'Real time changes',
      description: `See changes as they happen. With our platform, you can track every modification in real time. No more confusion 
      about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.`,
       
    },
    {
      id: 3,
      title: "Version control",
      description: `Experience real-time updates and never stress about version control again. Our platform ensures that you're always 
      working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your 
      team aligned, and maintain the flow of your work without any interruptions.`,
      content: <div className="w-full h-full bg-black-200 rounded-lg overflow-hidden"><Image src="/bg.png" alt="Real-time changes" width={600} height={400} className="w-full h-full object-contain p-2" /></div>,
    }
    
  ];

  return (
    <div>
      <div className="items-start justify-start p-4 gap-16 mt-10">
        <h1 >As a Leader I got a lot experience!</h1>
      </div>

      <div>

        <StickyScroll content={cont} contentClassName='<Image src = "one.jpg">' />


      </div>


    </div>
  )
}

export default Leadership;