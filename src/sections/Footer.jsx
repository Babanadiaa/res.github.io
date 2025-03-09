import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import RevealOnScroll from '../UI/RevealOnScroll';
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";






export default function Footer() {
    return (
        <footer>
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
                    <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B0%D1%82%D0%B0%D0%BC%D0%B0%D0%BD%D1%87%D1%83%D0%BA-435a8b352/"
                        className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all
                         bg-white/5 text-white ' target='_blank'>
                        <CiLinkedin />

                    </a>
                </div>
                <p>@ 2025 BabaZhaba. Stick together like balls of ass</p>
            </div>
        </footer>
    )
}
