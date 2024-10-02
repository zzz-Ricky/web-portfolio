import React from 'react'
import '../Styles/Simple/Splash.css'
import '../Styles/App.css'
import Splash1 from '../Assets/Images/Splash1.jpg'
import Splash2 from '../Assets/Images/Splash2.jpg'
import { useNavigate } from "react-router-dom";
import ScrollingText from '../Components/ScrollingText'

function Splash() {

    const navigate = useNavigate();
    const goToDesignPages = () => {
        navigate('/page1');
    };
    const goToCodingPages = () => {
        navigate('/simple');
    };

    return (
        <div id='container'>
            <div id='content'>
                <div className='textContainer'>
                    <div className='leftHalf'>
                        <div className='splashBodyGrabber'>
                            click
                        </div>
                        <div className='splashBodyText' id='designOption' onClick={goToDesignPages}>
                            or me if you are interested in design
                        </div>
                    </div>

                    <div className='rightHalf'>
                        <div className='splashBodyText' id='codeOption' onClick={goToCodingPages}>
                            me if you are interested in software
                        </div>
                    </div>
                </div>
                <div id='scroll1' >
                    <ScrollingText />
                </div>
                <img className='backgroundSplash' id='backSplash1' src={Splash1} alt="[splash screen image]" />
                <img className='backgroundSplash' id='backSplash2' src={Splash2} alt="[splash screen image]" />
            </div>
            <div id='splashFooterText'>
                Ricky Huynh 2024
            </div>
        </div>
    );
}

export default Splash