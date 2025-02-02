import React from 'react'
import '../../Styles/App.css'
import '../../Styles/AvantGarde/UniversalAG.css'
import '../../Styles/AvantGarde/PG2.css'
import AGBottomMargin from '../../Components/AGBottomMargin'
import Spread from '../../Assets/Images/Spread.jpg'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

function PG2() {
    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/page1');
    };
    const goToNextPage = () => {
        navigate('/page3');
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
            <div id='goForth' className='pageTraverse' onClick={goToNextPage}></div>
            <img src={Spread} alt="Classroom" className='doublePhoto' />
            <div className='leftPage'>
                <div className='doublePageContent'>
                </div>
                <div className='doublePageText'>
                    Mauris dapibus diam in arcu laoreet aliquam. Curabitur at mi id erat rutrum suscipit. Praesent ac iaculis velit. Proin dictum mauris orci, non luctus ante ultricies eget. Curabitur luctus egestas quam, vel consectetur ex aliquam a. Aenean molestie pharetra nulla. Vivamus vehicula sodales urna, eget lacinia nibh commodo a. Fusce finibus lacinia velit a vehicula. Mauris odio enim, pharetra sit amet felis a, laoreet dictum nisl. Aliquam porttitor placerat lectus, ac venenatis purus egestas quis. Integer nec nisi ante.
                </div>
                <AGBottomMargin
                    left='3'
                    right='Placeholder'
                />
            </div>
            <div className='rightPage'>
                <div className='doublePageContent'>
                </div>
                <div className='doublePageText'>
                    In hac habitasse platea dictumst. Suspendisse laoreet felis vitae commodo porta. Donec porta commodo neque non sagittis. Morbi bibendum, est at vehicula molestie, sem risus finibus enim, id viverra justo libero id risus. Aenean convallis enim eget enim auctor, nec dignissim ipsum varius. Proin enim ipsum, euismod sit amet molestie at, ultricies vel tellus. Sed ornare, velit quis ullamcorper hendrerit, augue mi imperdiet magna, sollicitudin mollis velit ex mattis nisl.
                </div>
                <AGBottomMargin
                    left='Placeholder'
                    right='4'
                    flip='yes'
                />
            </div>
        </motion.div>
    )
}

export default PG2