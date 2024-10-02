import React from 'react'
import { motion } from "framer-motion";
import Favicon from '../Assets/Images/Favicon.png'
import '../Styles/AvantGarde/Loading.css'

function Preloader() {
    return (
        <motion.div
            className='LoadingBody'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 1,
                ease: [0, 0.60, 0.4, 1.01]
            }}>
            <motion.div
                animate={{
                    scale: [1, 2, 1, 1],
                    rotate: [0, 360],
                    borderRadius: ["20%", "20%", "50%", "20%"],
                }}
            >
                <img className='LoadingIcon' src={Favicon} alt="[loading screen image]" />
            </motion.div>
        </motion.div>
    )
}

export default Preloader