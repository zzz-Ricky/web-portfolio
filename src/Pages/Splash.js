import React from 'react'
import '../Styles/Simple/Splash.css'
import '../Styles/App.css'
import Splash1 from '../Assets/Images/Splash1.jpg'
import Splash2 from '../Assets/Images/Splash2.jpg'
import { Outlet, Link } from "react-router-dom";

function Splash() {
    return (
        <>
            <nav>
                <div id='container'>
                    <div className='textContainer'>
                        <div className='leftHalf'>
                            <div className='splashBodyGrabber'>
                                click
                            </div>
                            <div className='splashBodyText' id='designOption'>
                                or me if you are interested in design.
                            </div>
                        </div>

                        <div className='rightHalf'>
                            <div className='splashBodyText' id='codeOption'>
                                me if you are interested in software
                            </div>
                        </div>
                    </div>
                    <img className='backgroundSplash' id='backsplash1' src={Splash1} alt="[splash screen image]" />
                    <img className='backgroundSplash' id='backsplash2' src={Splash2} alt="[splash screen image]" />
                    <div id='splashFooterText'>
                        Ricky Huynh 2024
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Splash