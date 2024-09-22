import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-6 p-6 backdrop-blur-xl backdrop-brightness-75">
            <Link className="hover:underline decoration-wavy hover:text-emerald-400 transition-all duration-300" href="/"><i>Home</i></Link>
            <Link className="hover:underline decoration-wavy hover:text-emerald-400 transition-all duration-300" href="/about"><i>About</i></Link>
        </nav>
    )
}

export default Navbar