import React from 'react'

function SimpleProjectCard({
    image,
    title,
    description,
    languages,
    link
}) {
    return (
        <div className='simpleProject'>
            <img className='cardImage' src={image} />
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