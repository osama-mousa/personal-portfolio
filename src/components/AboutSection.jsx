'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import { motion } from 'framer-motion';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Tailwindcss</li>
                <li>Cypress</li>
                <li>Postman</li>
                <li>Automated Testing</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Faculty of Computer Programming, Bartin University</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Certificate of Completion Cypress io</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section id='about' className='text-white'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image
                    className='glow-20 rounded-lg'
                    src='/images/hand-hold-artificial-intelligence-phone-made-with-generative-al_812426-737.jpg'
                    width={500}
                    height={500}
                    alt='About Image'
                />

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am a Software developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Next.js, Cypress, Express, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row justify-start mt-8 gap-3'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === "certifications"}>Certifications</TabButton>

                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutSection