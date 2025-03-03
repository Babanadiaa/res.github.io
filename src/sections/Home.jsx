import React from 'react'
import profile_image from '../assets/profile_image.webp'
import { FiDownload } from "react-icons/fi";
import resume from '../assets/resume.pdf'
export default function Home() {
    return (
        <section id='#home' className='min-h-screen flex flex-col justify-center items-center
            lg:flex-row-reverse gap-9 lg:gap-18  '>
            <div className="text-center z-10 px-4">
                <img className='w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70
                lg:m-0 lg:max-w-[200px] object-cover object-bottom hover:translate-y-1 transition-all ' src={profile_image} alt="Profile Image" />
            </div>
            <div className="text-center font-mono z-10 px-4">
                <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 px-1
                bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent leading-right'>I am Atamanchuk Maksym</h1>
                <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>I am frontend developer who loves creation interaction, scalable web applications.
                    My purpose is to build solutions that offer dynamic UI, high performance and delightful UX. </p>
                <div className="flex justify-center items-center space-x-4">

                    <a href="#Contact" className='bg-gradient-to-r flex flex-row from-teal-500 to 
                    indigo-600 py-3 px-6 rounded hover:-translate-y-1
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden'>Contact me</a>

                    <a href={resume} className='bg-gradient-to-r flex flex-row from-teal-500 to 
                    indigo-600 py-3 px-6 rounded hover:-translate-y-1
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden'><p>Resume</p>
                        <span className='h-g ml-3 text-2xl text-white'>
                            <FiDownload />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
