import React from 'react'
import Background from '@/components/Background'

function About() {
    return (
        <>
            <Background />
            <div className="w-screen h-[calc(100vh-78px)] flex justify-start items-center flex-col gap-12">
                <h1 className="font-black text-6xl md:text-8xl text-[#FADFA1] drop-shadow-2xl mt-24 hover:scale-105 hover:-translate-y-1 transition-all">My Socials</h1>
                <div className='flex justify-center items-center gap-4 text-4xl'>
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://github.com/ZeezoLua">Github</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://discord.com/users/719195873808220160">Discord</a>
                    -
                    <a target='_blank' className='hover:underline decoration-wavy text-white hover:text-emerald-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300' href="https://www.tiktok.com/@ezz_xzy">Tiktok</a>
                </div>
            </div>
        </>
    )
}

export default About