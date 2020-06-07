import React from 'react';

const Shape4 = () => {
    return (  
        // <!-- cyan circle -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 10 10" className="shadow">
            <symbol id="circle">
                <circle cx="5" cy="5" r="5" fill="url(#gradCyan)" stroke="#006666" stroke-width="0.1"/> 
            </symbol>

            <g id="shape4">
                <use href="#circle" />
                <use href="#circle" transform="scale(0.9) translate(0.55 0.55)"/>
            </g>        
        </svg>
    );
}
 
export default Shape4;