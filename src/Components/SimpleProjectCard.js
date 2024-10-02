import React from 'react'
import { motion } from "framer-motion";

function SimpleProjectCard({
    image,
    title,
    description,
    languages,
    link
}) {

    const isURL = (path) => {
        try {
            new URL(path);
            return true;
        } catch {
            return false;
        }
    };
    const imageSrc = isURL(image) ? image : require(`../Assets/Images/${image}`);

    return (
        <motion.div
            className='simpleProject'
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img className='cardImage' src={imageSrc} />
            <div className='textSection'>
                <a className='cardTitle' href={link} target="_blank">{title}</a>
                <div className='information'>
                    <p className='cardDesc'>{description}</p>
                    <div className='cardLang'>
                        {languages.map((language, index) => (
                            <div key={index} className='languageItem'>
                                {language}
                            </div>
                        ))}
                    </div>
                    <p className='cardLink'>{link}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default SimpleProjectCard