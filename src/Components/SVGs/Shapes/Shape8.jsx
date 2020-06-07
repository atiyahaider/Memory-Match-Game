import React from 'react';

const Shape8 = () => {
    return (  
        // <!-- lilac oval -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="100" viewBox="0 0 10 10" className="shadow">
            <symbol id="oval">
                <ellipse cx="5" cy="5" rx="5" ry="3.2" fill="url(#gradOlive)" stroke="#4d4d00" stroke-width="0.15"/>
            </symbol>
        
            <g id="shape8">
                <use href="#oval" />
                <use href="#oval" transform="scale(0.92 0.86) translate(0.4 0.76)"/>
            </g>
        </svg>
    );
}
 
export default Shape8;