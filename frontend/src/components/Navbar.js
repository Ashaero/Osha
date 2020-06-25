import React from 'react'
import '../sass/Navbar.scss'

function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
