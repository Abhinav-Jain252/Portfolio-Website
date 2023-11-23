"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")},{ssr:false})

const achievmentsList = [
    {
        metric:"Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric:"Users",
        value: "100000",
    },
    {
        metric:"Awards",
        value: "7",
    },
    {
        metric:"Years",
        value: "5",
    },
];

const AchievmentsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='rounded-md py-8 px-16 flex flex-row items-center justify-between'>
        {
            achievmentsList.map((achievment, index)=> {
                return(
                    <div key={index} className='flex flex-col items-center justify-center mx-4'>
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {achievment.prefix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievment.value)}
                                locale='en-Us'
                                className='text-white text-4xl font-bold'
                                configs={(_, index) => {
                                    return{
                                        mass:1,
                                        friction:100,
                                        tensions:140 * (index+1),
                                    }
                                }}
                            />
                            {achievment.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] text-base'>{achievment.metric}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AchievmentsSection