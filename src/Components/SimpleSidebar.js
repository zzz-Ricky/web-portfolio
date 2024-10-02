import React from 'react'

import DimmerKnob from './DimmerKnob'

function SimpleSidebar({ darkModeHandler, darkStatus }) {
    return (
        <div className='sideBar'>
            <div className='sidebarHeader'>
                <p id='greeting'>Hello, this is</p>
                <p id='sidebarName'>Ricky Huynh</p>
                <div className='linkStack'>
                    <div className='linkCombo'>
                        <svg className='sidebarIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                        <a className='sidebarLink' href="https://www.linkedin.com/in/ricky-huyhh-1306a32b5/" target="_blank">LINKEDIN.⇲</a>
                    </div>
                    <div className='linkCombo'>
                        <svg className='sidebarIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        <a className='sidebarLink' href="https://github.com/zzz-Ricky" target="_blank">GITHUB.⇲</a>
                    </div>
                    <div className='linkCombo'>
                        <svg className='sidebarIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" /></svg>
                        <a className='sidebarLink' href="https://www.instagram.com/riky_hh/" target="_blank">INSTAGRAM.⇲</a>
                    </div>


                </div>
                <p id='greeting'></p>
            </div>
            <div className='sidebarBody'>
                <p className='sidebarDescription'><span id='coloredCube'>■</span> I am currently studying Software Engineering at the University of Calgary,</p>
                <hr />
                <p className='sidebarSection'>Tech Stack / Section A</p>
                <ul className='sidebarContent'>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C/C++</li>
                    <li>React</li>
                    <li>Java & more</li>
                </ul>
                <hr />
                <p className='sidebarSection'>Design stack / Section B</p>
                <ul className='sidebarContent'>
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