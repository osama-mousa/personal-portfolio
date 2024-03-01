import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GithubIcon from '../../public/images/projects/Github-icon.svg'
import LinkedIcon from '../../public/images/projects/LinkedIn-icon.svg'



const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
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
                <form className='flex flex-col gap-6'>
                    <div>
                        <label htmlFor="email" className='text-white mb-2 block text-sm font-medium'>Your email</label>
                        <input
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
                        className='bg-purple-700 hover:bg-purple-900 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection