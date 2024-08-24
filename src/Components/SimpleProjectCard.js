import React from 'react'

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
        <div className='simpleProject'>
            <img className='cardImage' src={imageSrc} />
            <div className='textSection'>
                <p className='cardTitle'>{title}</p>
                <div className='information'>
                    <p className='cardDesc'>{description}</p>
                    <p className='cardLang'>{languages}</p>
                    <p className='cardLink'>{link}</p>
                </div>
            </div>
        </div>
    )
}

export default SimpleProjectCard