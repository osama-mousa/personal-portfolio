'use client'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image src='/images/hand-hold-artificial-intelligence-phone-made-with-generative-al_812426-737.jpg' width={500} height={500} />

                <div>
                    <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am a Software developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Next.js, Cypress, Express, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row mt-8 gap-3'>
                        <span className='font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-900'>Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection