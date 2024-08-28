import React from 'react'
import '../../Styles/App.css'
import '../../Styles/AvantGarde/UniversalAG.css'
import '../../Styles/AvantGarde/PG3.css'
import AGTopMargin from '../../Components/AGTopMargin'
import AGBottomMargin from '../../Components/AGBottomMargin'
import { useNavigate } from "react-router-dom";

function PG3() {
    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/page2');
    };

    return (
        <div className='avGardeBody'>
            <div id='goBack' className='pageTraverse' onClick={goToPrevPage}></div>
            {/* <div id='goForth' className='pageTraverse' onClick={goToNextPage}></div> */}
            <div className='leftPage'>
                <AGTopMargin
                    left='RICKY HUYNH'
                    right='Design portfolio'
                />
                <div className='pageContent'>
                </div>
                <AGBottomMargin
                    left='5'
                    right='Placeholder'
                />
            </div>
            <div className='rightPage' id='contactPage'>
                <AGTopMargin
                    left='RICKY HUYNH'
                    right='Design portfolio'
                />
                <div className='pageContent'>
                    <div id='contactMe'>
                        <h1 id='creditsTitle'>Contact</h1>
                        <a href="https://www.behance.net/gallery/200845737/MURS-GOTHIC-Free-Font-Latin-Cyrillic" className='mursGothic' id='creditLink'>LINKEDIN⇲</a>
                        <a href="https://www.behance.net/gallery/200845737/MURS-GOTHIC-Free-Font-Latin-Cyrillic" className='mursGothic' id='creditLink'>GITHUB⇲</a>
                        <a href="https://www.behance.net/gallery/200845737/MURS-GOTHIC-Free-Font-Latin-Cyrillic" className='mursGothic' id='creditLink'>ARTSTATION⇲</a>
                    </div>
                    <div id='siteCredits'>
                        <h1 id='creditsTitle'>Credits</h1>
                        <div className='creditsCategory'>
                            <h1 className='mursGothic'>TYPEFACE// MURS GOTHIC - </h1>
                            <a href="https://www.behance.net/gallery/200845737/MURS-GOTHIC-Free-Font-Latin-Cyrillic" className='mursGothic' id='creditLink'>Maksym Kobuzan⇲</a>
                        </div>
                    </div>
                </div>
                <AGBottomMargin
                    left='Placeholder'
                    right='6'
                    flip='yes'
                />
            </div>
        </div>
    )
}

export default PG3