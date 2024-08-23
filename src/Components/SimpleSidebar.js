import React from 'react'

function SimpleSidebar() {
    return (
        <div className='sideBar'>
            <div className='sidebarHeader'>
                <p id='greeting'>Hello, this is </p>
                <p id='sidebarName'>Ricky Huynh</p>
                <div className='linkStack'>
                    <a className='sidebarLink' href="https://www.linkedin.com/in/ricky-huyhh-1306a32b5/">LINKEDIN.⇲</a>
                    <a className='sidebarLink' href="https://www.linkedin.com/in/ricky-huyhh-1306a32b5/">GITHUB.⇲</a>
                </div>
                <p id='greeting'></p>
            </div>
            <div className='sidebarBody'>
                <p className='sidebarDescription'>I am currently studying Software Engineering at the University of Calgary,</p>
                <p className='sidebarSection'>Tech Stack</p>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C/C++</li>
                    <li>React</li>
                    <li>Java</li>
                </ul>

                <p className='sidebarSection'>Design stack</p>
                <ul>
                    <li>Krita - Illustration</li>
                    <li>Kdenlive - Video editing</li>
                </ul>
            </div>
            <div className='bufferSpace2' />
        </div>
    )
}

export default SimpleSidebar