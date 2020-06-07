import React from 'react';

const Shape9 = () => {
    return (  
        // <!-- orange diamond -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 10 10" className="shadow">
            <g id="shape9">
                <path d="M2.5,0 L7.5,0 L10,2.5 L5,10 L0,2.5Z" fill="url(#gradOrange)" stroke="#e69500" stroke-width="0.15"/> 
                <path d="M2.5,0 L5,10 L7.5,0" fill="url(#gradOrange)" stroke="#e69500" stroke-width="0.15"/> 
                <path d="M0,2.5 L10,2.5" fill="url(#gradOrange)" stroke="#e69500" stroke-width="0.15"/> 
                <path d="M3.1,2.5 L5,0 L6.9,2.5" fill="url(#gradOrange)" stroke="#e69500" stroke-width="0.15"/> 
            </g>
        </svg>
    );
}
 
export default Shape9;