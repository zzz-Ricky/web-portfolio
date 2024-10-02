import React from 'react'
import '../../Styles/App.css'
import '../../Styles/AvantGarde/UniversalAG.css'
import '../../Styles/AvantGarde/PG3.css'
import AGTopMargin from '../../Components/AGTopMargin'
import AGBottomMargin from '../../Components/AGBottomMargin'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

function PG3() {
    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/page2');
    };

    return (
        <motion.div
            className='avGardeBody'
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{
                duration: 0.1,
            }}>
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
                        <div className='creditsCategory'>
                            <h1 className='NeuePower'>TYPEFACE// NEUE POWER - </h1>
                            <a href="https://www.behance.net/gallery/144961265/Neue-Power-Free-Font?tracking_source=project_owner_other_projects#" className='NeuePower' id='creditLink'>Power Type⇲</a>
                        </div>
                    </div>
                </div>
                <AGBottomMargin
                    left='Placeholder'
                    right='6'
                    flip='yes'
                />
            </div>
        </motion.div>
    )
}

export default PG3