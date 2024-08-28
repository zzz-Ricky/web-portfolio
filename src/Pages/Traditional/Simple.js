import React, { useState, useEffect } from 'react';
import SimpleProjectPreview from '../../Components/SimpleProjectPreview'
import SimpleSidebar from '../../Components/SimpleSidebar'
import '../../Styles/Simple/Software.css'
import SimpleProjectCard from '../../Components/SimpleProjectCard'
import ProjectData from '../../Data/ProjectList.json'
import SimplePlaceholder from '../../Components/SimplePlaceholder';
import { useNavigate } from "react-router-dom";

function Simple() {

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
        console.log("test2")
    }, [selectedProject]);

    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate('/');
    };

    return (
        <body id='simpleBody'>
            <div id='goBack' className='pageTraverse' onClick={goToPrevPage}></div>
            <div className='bufferSpace1'>01 [Ricky Huynh 2024]</div>
            <SimpleSidebar />
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
                    <SimplePlaceholder></SimplePlaceholder>
                }
            </div>
        </body>
    )
}

export default Simple