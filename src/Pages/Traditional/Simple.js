import React, { useState, useEffect, useRef } from 'react';
import SimpleProjectPreview from '../../Components/SimpleProjectPreview'
import SimpleSidebar from '../../Components/SimpleSidebar'
import '../../Styles/Simple/Software.css'
import SimpleProjectCard from '../../Components/SimpleProjectCard'
import ProjectData from '../../Data/ProjectList.json'
import SimplePlaceholder from '../../Components/SimplePlaceholder';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MouseBall } from '../../Components/MouseBall.ts';

function Simple() {
    const ref = useRef(null);
    const { x, y } = MouseBall(ref);
    const [selectedProject, setSelectedProject] = useState(null);
    const selectionHandler = (key) => {
        if (key === selectedProject) {
            setSelectedProject(null)
        }
        else {
            setSelectedProject(key)
        }

    };

    useEffect(() => {
    }, [selectedProject]);

    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/');
    };

    const [darkMode, setDarkMode] = useState(false);
    const darkModeHandler = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {

    }, [darkMode]);

    return (
        <motion.div
            id='simpleBody'
            className={darkMode ? 'dark-mode' : 'light-mode'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.60, 0.4, 1.01]
            }}
        >
            <motion.div
                ref={ref}
                className="box"
                style={{ x, y }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 2.5,
                }} />
            <div id='goBack' className='pageTraverse' onClick={goToPrevPage}></div>
            <div className='bufferSpace1'>01 [Ricky Huynh 2024]</div>
            <SimpleSidebar
                darkStatus={darkMode}
                darkModeHandler={darkModeHandler}
            />
            <div className='bufferSpace3'>
                {ProjectData.projects.map(ProjectEntry => (
                    <div
                        key={ProjectEntry.title}  // Place `key` here
                        onClick={() => selectionHandler(ProjectEntry)}
                        className='previewContainer'
                    >
                        <SimpleProjectPreview
                            image={ProjectEntry.image}
                            title={ProjectEntry.title}
                        />
                    </div>
                ))}
            </div>
            <div className='cardStack'>
                <p id='nowPlaying'>NOW PLAYING:</p>
                {selectedProject &&
                    < SimpleProjectCard
                        image={selectedProject.image}
                        title={selectedProject.title}
                        description={selectedProject.description}
                        languages={selectedProject.languages}
                        link={selectedProject.link}
                    />
                }
                {!selectedProject &&
                    <SimplePlaceholder darkStatus={darkMode}></SimplePlaceholder>
                }
            </div>
        </motion.div>
    )
}

export default Simple