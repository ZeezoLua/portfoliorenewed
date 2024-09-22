import React from 'react'
import Background from '@/components/Background'

function About() {
    return (
        <>
            <Background />
            <div className="w-screen h-[calc(100vh-78px)] flex justify-start items-center flex-col gap-12">
                <h1 className="font-black text-6xl md:text-8xl text-[#FADFA1] drop-shadow-2xl mt-24 hover:scale-105 hover:-translate-y-1 transition-all">My Projects</h1>
                <div className='flex justify-center items-center gap-4 text-4xl'>
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://zeezolua.github.io/AllCursors/">All Cursors</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://zeezolua.github.io/Introduction/">Rizz</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://zeezolua.github.io/DaisyUIProject/">DaisyUI</a>
                </div>
            </div>
        </>
    )
}

export default About