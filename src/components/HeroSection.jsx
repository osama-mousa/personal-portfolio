'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold h-10">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-900'>Hello, I&apos;m{' '}</span>
                        <TypeAnimation
                            sequence={[
                                'Osama',
                                1000,
                                'Web Developer',
                                1000,
                                'QA Tester',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        I&apos;m a passionate web developer skilled in JavaScript, React, Next.js, Cypress, and Git. Quick learner, team player, eager to collaborate on creating awesome applications.
                    </p>
                    <div className=''>
                        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/osama-mousa-568364209'} className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-950  hover:text-white hover:border hover:border-slate-900 text-gray-300 mr-5'>Hire Me</button>

                        <button onClick={() => window.location.href = 'https://flowcv.com/resume/u93s6l54kg'} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-950  hover:bg-slate-800 text-white mt-4'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-purple-950  w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative glow'>
                        <Image
                            src={'/images/me.jpeg'}
                            alt='Hero Image'
                            className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection