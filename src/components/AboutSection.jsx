'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
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
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === "certifications"}>Certifications</TabButton>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection