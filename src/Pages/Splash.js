import React from 'react'
import '../Styles/Simple/Splash.css'
import Splash1 from '../Assets/Images/Splash1.jpg'
import Splash2 from '../Assets/Images/Splash2.jpg'
import { Outlet, Link } from "react-router-dom";

function Splash() {
    return (
        <>
            <nav>
                <div id='Container'>
                    <div className='splashBodyGrabber'>
                        click
                    </div>
                    <div className='splashBodyText' id='codeoption'>
                        <li>
                            me if you are interested in software
                        </li>
                    </div>
                    <div className='splashBodyText' id='designoption'>
                        or me if you are interested in design
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