import React from 'react'

import DimmerKnob from './DimmerKnob'

function SimpleSidebar({ darkModeHandler, darkStatus }) {
    return (
        <div className='sideBar'>
            <div className='sidebarHeader'>
                <p id='greeting'>Hello, this is</p>
                <p id='sidebarName'>Ricky Huynh</p>
                <div className='linkStack'>
                    <a className='sidebarLink' href="https://www.linkedin.com/in/ricky-huyhh-1306a32b5/">LINKEDIN.⇲</a>
                    <a className='sidebarLink' href="https://github.com/zzz-Ricky">GITHUB.⇲</a>
                    <a className='sidebarLink' href="https://www.instagram.com/riky_hh/">INSTAGRAM.⇲</a>
                </div>
                <p id='greeting'></p>
            </div>
            <div className='sidebarBody'>
                <p className='sidebarDescription'><span id='coloredCube'>■</span> I am currently studying Software Engineering at the University of Calgary,</p>
                <hr />
                <p className='sidebarSection'>Tech Stack / Section A</p>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C/C++</li>
                    <li>React</li>
                    <li>Java & more</li>
                </ul>
                <hr />
                <p className='sidebarSection'>Design stack / Section B</p>
                <ul>
                    <li>Krita - Illustration</li>
                    <li>Kdenlive - Video editing</li>
                </ul>
            </div>
            <div className='bufferSpace2'>02
                <div className='knobContainer' onClick={darkModeHandler}>
                    <DimmerKnob darkStatus={darkStatus}>Click Me</DimmerKnob>
                </div>
            </div>
        </div>
    )
}

export default SimpleSidebar