import React from 'react'

function SimpleProjectPreview({
    image,
    title,
}) {
    return (
        <div className='simplePreview'>
            <img className='previewImage' src={image} />
            <p className='previewTitle'>{title}</p>
        </div>
    )
}

export default SimpleProjectPreview