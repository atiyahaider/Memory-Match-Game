import React from 'react';

const Shape3 = () => {
    return (          
        // <!-- gold star -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 10 10" className="shadow">
            <symbol id="star">
                <path d="M5,7.3 L8.7,10 L7.5,6 L10,3.7 L6.5,3.5 L5,0 L3.5,3.5 L0,3.7 L2.5,6 L1.3,10Z" fill="url(#gradGold)" stroke="darkgoldenrod" stroke-width="0.15"/> 
            </symbol>

            <g id="shape3">
                <use href="#star"/>
                <use href="#star" transform="scale(0.78 0.78) translate(1.4 1.4)"/> 
            </g>
        </svg>
    );
}
 
export default Shape3;