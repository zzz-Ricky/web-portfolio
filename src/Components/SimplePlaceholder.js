import { React } from 'react';
import favicon from '../Assets/Images/Favicon3.png';

function SimplePlaceholder({ darkStatus }) {

    return (
        <div id='placeholderOuter'>
            <div id='placeholderPlatter'>
                <div id='placeholderDisk'>
                    <div id='placeholderCenter'>
                        <img
                            className={darkStatus ? 'dark-Logo' : 'light-Logo'}
                            id='diskLogo'
                            src={favicon}
                            alt="[website logo]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimplePlaceholder;
