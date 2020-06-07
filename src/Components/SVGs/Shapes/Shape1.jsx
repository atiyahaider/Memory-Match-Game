import React from 'react';

const Shape1 = () => {
    return (  
        // <!-- blue triangle -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 10 10" className="shadow">
            <symbol id="triangle">
                <polygon points="5,0 0,10 10,10" fill="url(#gradBlue)" stroke="blue" stroke-width="0.15"/> 
            </symbol>
            
            <g id="shape1">
                <use href="#triangle"/>
                <use href="#triangle" transform="scale(0.85 0.85) translate(0.9 1.3)"/> 
            </g>
        </svg>
    );
}
 
export default Shape1;