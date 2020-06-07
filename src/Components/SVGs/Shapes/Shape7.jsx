import React from 'react';

const Shape7 = () => {
    return (  
        // <!-- magenta rectangle -->
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 10 10" className="shadow">
            <symbol id="rectangle">
                <rect width="10" height="5" fill="url(#gradMagenta)" stroke="#4d004d" stroke-width="0.15" transform="translate(0 2.5)"/> 
            </symbol>

            <g id="shape7">
                <use href="#rectangle" />
                <use href="#rectangle" transform="scale(0.9 0.8) translate(0.55 1.25)"/>
            </g>
        </svg>
    );
}
 
export default Shape7;