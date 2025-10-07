import React from "react";

import { Button } from "./ui/MovingBorders";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading py-20">
        Recent <span className="text-purple">Projects</span>
      </h1>
      <div className="grid lg:grid-cols-4 sm:rid-cols-1 gap-10 mt-12 w-full">
            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Student Management System
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            In this project, I engaged with basic data management systems and ER diagrams. 
                            I gained valuable experience in database management and normalization techniques.
                        </p>
                    </div>
                </div>
                
            </Button>

            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Booking system 
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                        This is my latest project, which I started at the beginning of September 2024. I took on this project from a friend who
                        needed an online booking platform for several villas in the southern region. My goal 
                        is to develop it into an advanced platform, similar to popular ones like Airbnb, by learning everything from the ground up.
                        </p>
                    </div>
                </div>
                
            </Button>

            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                           Library Management System
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            In this project, I worked with library management systems and database design. 
                            I gained experience in creating efficient data structures and implementing user-friendly interfaces.
                        </p>
                    </div>
                </div>
                
            </Button>


            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Personal Portfolio
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                        I completed this portfolio project in three weeks of dedicated work. 
                        Before this, I had limited experience with UI/UX design, but this project helped me grasp the fundamentals and modern design principles.
                        </p>
                    </div>
                </div>
                
            </Button>


            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Stock Price Predicting Algorithm
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            In this project, I developed a machine learning algorithm to predict stock prices using historical data. 
                            I gained experience in data analysis, feature engineering, and model evaluation techniques.
                        </p>
                    </div>
                </div>
                
            </Button>
        
            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex min-w-[40%] lg:basis-[40%] md:basis-[45%] h-[250px] text-black 
                dark:text-white border-neutral-200 dark:border-slate-800 justify-start items-center"
            >
                <div>
                    <div className="p-4">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Sentiment analysis Project
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                        This Sentiment Analysis project kickstarted my studies in NLP. As a foundational aspect of NLP, 
                        it gave me a solid understanding of how language can be integrated into AI and ML.
                        </p>
                    </div>
                </div>
                
            </Button>

        </div>
    </div>
  );
};

export default Projects;
