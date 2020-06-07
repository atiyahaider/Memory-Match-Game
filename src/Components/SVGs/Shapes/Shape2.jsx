import React from 'react';

const Shape2 = () => {
    return (  
        // <!-- pink hexagon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 10 10" className="shadow">
            <symbol id="hexagon">
                <polygon points="3,0 0,3 0,7 3,10 7,10 10,7 10,3 7,0" fill="url(#gradPink)" stroke="#ff99aa" stroke-width="0.15"/>
            </symbol>

            <g id="shape2">
                <use href="#hexagon"/>
                <use href="#hexagon" transform="scale(0.9 0.9) translate(0.5 0.5)"/>
            </g>            
        </svg>
    );
}
 
export default Shape2;