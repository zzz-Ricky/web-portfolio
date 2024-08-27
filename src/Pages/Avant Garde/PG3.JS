import React from 'react'
import '../../Styles/App.css'
import '../../Styles/Avant Garde/UniversalAG.css'
import '../../Styles/Avant Garde/PG3.css'
import AGTopMargin from '../../Components/AGTopMargin'
import AGBottomMargin from '../../Components/AGBottomMargin'
import { useNavigate } from "react-router-dom";

function PG3() {
    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/page2');
    };
    const goToNextPage = () => {
        navigate('/page3');
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