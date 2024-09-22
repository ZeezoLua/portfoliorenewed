import React from 'react'
import { Metadata } from 'next';
import Background from '@/components/Background'

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects Page",
};

function About() {
    return (
        <>
            <Background />
            <main className="w-screen flex justify-start items-center h-[calc(100vh-72px)] flex-col gap-12 py-12">
                <div className="flex justify-center items-center">
                    <h1 className="font-black text-3xl md:text-8xl drop-shadow-2xl text-[#FADFA1] text-center hover:scale-105 hover:-translate-y-1 transition-all">My <br /> Projects</h1>
                </div>
                <div className="flex justify-center items-center rounded-full border-2 border-[#FADFA1] py-4 px-12 backdrop-blur-sm w-96 hover:scale-105 hover:-translate-y-1 gap-4 transition-all">
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://zeezolua.github.io/AllCursors/">All Cursors</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://github.com/ZeezoLua/Portfolio1">Portfolio1</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://zeezolua.github.io/DaisyUIProject/">DaisyUI</a>
                </div>
            </main>
        </>
    )
}

export default About