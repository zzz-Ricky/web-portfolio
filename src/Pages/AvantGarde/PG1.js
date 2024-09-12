import React from 'react'
import '../../Styles/App.css'
import '../../Styles/AvantGarde/UniversalAG.css'
import '../../Styles/AvantGarde/PG1.css'
import AGTopMargin from '../../Components/AGTopMargin'
import AGBottomMargin from '../../Components/AGBottomMargin'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PG1() {

    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/');
    };
    const goToNextPage = () => {
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
            }}
        >
            <div id='goBack' className='pageTraverse' onClick={goToPrevPage}></div>
            <div id='goForth' className='pageTraverse' onClick={goToNextPage}></div>
            <div className='leftPage'>
                <AGTopMargin
                    left='RICKY HUYNH'
                    right='Design portfolio'
                />
                <div className='pageContent'>
                    <div id='leftColour'>THIS PAGE IS A WORK IN PROGRESS</div>
                </div>
                <AGBottomMargin
                    left='1'
                    right='For an Optimal experience, view this page at 100% zoom'
                />
            </div>
            <div className='rightPage'>
                <AGTopMargin
                    left='RICKY HUYNH'
                    right='Design portfolio'
                />
                <div className='pageContent'>
                    <div id='leftColour'>THIS PAGE IS A WORK IN PROGRESS</div>
                </div>
                <AGBottomMargin
                    left='Placeholder'
                    right='2'
                    flip='yes'
                />
            </div>
        </motion.div>
    )
}

export default PG1