import React from 'react'
import TransitionLink from './transitionLink'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-6 p-6 backdrop-blur-xl backdrop-brightness-75">
            <TransitionLink href="/" label="Home" />
            <TransitionLink href="/about" label="About" />
            <TransitionLink href="/projects" label="Projects" />
        </nav>
    )
}

export default Navbar