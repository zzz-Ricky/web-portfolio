import React from 'react'

function AGTopMargin({ left, right }) {
    return (
        <div className='topMargin'>
            <div className='upperTopMargin'>
                <p>{left}</p>
                <p>{right}</p>
            </div>
            <div className='lowerTopMargin'>
                <hr></hr>
            </div>
        </div>
    )
}

export default AGTopMargin