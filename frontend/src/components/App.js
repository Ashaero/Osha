import React from 'react'
import '../sass/App.scss'
import ButtonComponent from './ButtonComponent'
import Cat from '../images/CPP.jpg'
import Navbar from './Navbar'

function App() {
    return (
        <>
            <Navbar></Navbar>
            {/* Navbar */}
            {/* Home */}
            <div className="home">
                <div className="wrapper">
                    <div className="content">
                        <img className="cpp" src={Cat}></img>
                        <h3>Clawzz</h3>
                        <p>Clawzz, Web Developer.</p>
                    </div>
                </div>
            </div>
            {/* {*About} */}
            <div className="about">About</div>
        </>
    )
}

export default App
