//Author:Supratik De//
import React from 'react'
import HighlightText from './Highlighttext';
import CTAButton from "./Button";
const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Education for",
      highlightText: " Everyone, Anywhere",
      description:
        "Skillverse collaborates with over 275+ premier  universities and corporations to provide individuals and organizations throughout the world with flexible, affordable, job-relevant online learning.",
      BtnText: "Learn More",
      BtnLink: "/SignUp",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Skillverse collaborates with over 275+ premier universities and corporations to provide individuals and organizations throughout the world with flexible, affordable, job-relevant online learning.",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Skillverse collaborates with over 275+ premier universities and corporations to provide individuals and organizations throughout the world with flexible, affordable, job-relevant online learning.",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Skillverse collaborates with over 275+ premier universities and corporations to provide individuals and organizations throughout the world with flexible, affordable, job-relevant online learning.",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Skillverse collaborates with over 275+ premier universities and corporations to provide individuals and organizations throughout the world with flexible, affordable, job-relevant online learning.",
    },
  ];




const LearningGrid = () => {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-orange-300 lg:h-[280px] p-5" : "bg-primary-body lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold text-black'>
                                {card.heading}
                                <HighlightText text={card.highlightText} />
                            </div>
                            <p className='font-medium text-black text-xl '>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <CTAButton active={true} linkto={card.BtnLink}
                          
                                >
                                    {card.BtnText} 
                                </CTAButton>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-black text-lg font-extrabold'>
                            {card.heading}
                        </h1>
                        <p className='text-black font-bold text-[15px]'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid
