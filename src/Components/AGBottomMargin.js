import React from 'react'

function AGBottomMargin({ left, right, flip }) {
    return (
        <div className='bottomMargin'>
            <p className={!flip ? 'pageNumber' : 'leftBlurb'}>{left}</p>
            <p className={flip ? 'pageNumber' : 'rightBlurb'}>{right}</p>
        </div >
    )
}

export default AGBottomMargin