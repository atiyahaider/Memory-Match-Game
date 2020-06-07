import React from 'react';

const Shape6 = () => {
    return (  
        // <!-- green square -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 10 10" className="shadow">
            <symbol id="square">
                <polygon points="0,5 5,0 10,5 5,10" height="7" fill="url(#gradGreen)" stroke="#003300" stroke-width="0.15"/> 
            </symbol>
            
            <g id="shape6">
                <use href="#square"/>
                <use href="#square" transform="scale(0.9) translate(0.55 0.55)"/>
            </g>
        </svg>

    );
}
 
export default Shape6;