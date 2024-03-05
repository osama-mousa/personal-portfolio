'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GithubIcon from '../../public/images/projects/Github-icon.svg'
import LinkedIcon from '../../public/images/projects/LinkedIn-icon.svg'



const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);
            const resData = await response.json();

            if (response.status === 200) {
                console.log("Message sent.");
                setEmailSubmitted(true);
                e.target.email.value = '';
                e.target.subject.value = '';
                e.target.message.value = '';
            }
        } catch (error) {
            console.error("Error occurred while parsing JSON:", error);
        }
    };


    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href={'https://github.com/osama-mousa'} >
                        <Image className='w-9' src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/osama-mousa-568364209'} >
                        <Image className='w-10' src={LinkedIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='text-white mb-2 block text-sm font-medium'>Your email</label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            placeholder='name@google.com'
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className='text-white mb-2 block text-sm font-medium'>Subject</label>
                        <input
                            name='subject'
                            type="text"
                            id="subject"
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Just saying hi'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='text-white mb-2 block text-sm font-medium'>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-purple-950 hover:bg-purple-900 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection