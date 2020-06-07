import React from 'react';

const Shape5 = () => {
    return (  
        // <!-- maroon heart -->
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 100 100" className="shadow">
            <symbol id="heart">
                <path d="M50,20 C27,-8 -5,9 1,40 C5,60 35,70 50,97 C65,70 95,60 99,40 C105,9 73,-8 50,20Z" fill="url(#gradMaroon)" stroke="maroon" stroke-width="1"/> 
            </symbol>
            
            <g id="shape5">
                <use href="#heart" />
                <use href="#heart" transform="scale(0.87) translate(7 7)"/>
            </g>
        </svg>
    );
}
 
export default Shape5;