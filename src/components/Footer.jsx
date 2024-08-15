import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footer bg-[#111111] glow'>
            <div className='container p-16 flex justify-between'>
                <Link href={'/'}>
                    <Image
                        src="/images/OSM.svg"
                        alt="Logo"
                        width={50}
                        height={20}
                        className={`cursor-pointer filter brightness-0 invert`}
                    />
                </Link>
                <p className='text-slate-600'>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
