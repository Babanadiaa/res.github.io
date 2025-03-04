import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import RevealOnScroll from '../UI/RevealOnScroll';




export default function Footer() {
    return (
        <footer>
            <RevealOnScroll>
                <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg
            text-gray-300 font-mono mb-10">
                    <div className="flex gap-10 p-4 justify-center text-white">
                        <a href="https://t.me/Ricardo_nadia" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all
                    bg-white/5 text-white ' target='_blank'>
                            <LiaTelegramPlane />
                        </a>
                        <a href="https://www.instagram.com/atmn_m" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all
                    bg-white/5 text-white ' target='_blank'>
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/Babanadiaa" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all
                    bg-white/5 text-white ' target='_blank'>
                            <SlSocialGithub />
                        </a>
                    </div>
                    <p>@ 2025 BabaZhaba. Stick together like balls of ass</p>
                </div>
            </RevealOnScroll>
        </footer>
    )
}
