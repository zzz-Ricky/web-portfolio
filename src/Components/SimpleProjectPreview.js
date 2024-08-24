import React from 'react'

function SimpleProjectPreview({
    image,
    title,
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
        <div className='simplePreview'>
            <img className='previewImage' src={imageSrc} alt="image not found" />
            <p className='previewTitle'>{title}</p>
        </div>
    )
}

export default SimpleProjectPreview