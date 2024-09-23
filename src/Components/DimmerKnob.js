import React from 'react'
import '../Styles/Simple/Hardware.css'

function DimmerKnob({ darkStatus }) {
    return (
        <div id='outerBevel'>
            <div id='VFD'>
                <div id='heading'>
                    BRIGHTNESS SETTING
                </div>
                <div id='digitalBody'>
                    {darkStatus ? 'NIGHT.TIME' : 'DAY.TIME'}
                </div>
                <div id='footing'>
                    <div id='bottomMarkings'>
                        <div>-0X</div>
                        <div id='increments'>
                            <div>#080808</div>
                            <div id='maxMagnitude'>#f4f4f4</div>
                        </div>
                    </div>
                    {darkStatus &&
                        <div id='levelBar'>
                            <div id='levelLabel'>B </div>
                            <div id='brightLevel'></div>
                        </div>
                    }
                    {!darkStatus &&
                        <div id='levelBar'>
                            <div id='levelLabel'>B </div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                            <div id='brightLevel'></div>
                        </div>
                    }
                </div>
            </div>
            <div id='knob'>
                <div id='knobSubContainer' className={darkStatus ? 'dark-rotate' : 'light-rotate'}>
                    <div id='dot'></div>
                </div>
            </div>
        </div>
    )
}

export default DimmerKnob