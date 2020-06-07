import React from 'react';

const Flower8 = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="long2-petal">
                <path d="M47,45 C25,-10 75,-10 53,45" fill="url(#gradCyan)"/>
            </symbol>

            {/* <!-- cyan long petal flower --> */}
            <g id="flower8">
                <polygon points="5,15 18,5 100,65 10,90" fill="tan"/> 
                <use href="#long2-petal"/>  
                <use href="#long2-petal" transform="rotate(45 50 50)"/>  
                <use href="#long2-petal" transform="rotate(90 50 50)"/>
                <use href="#long2-petal" transform="rotate(90 50 50) rotate(45 50 50)"/>  
                <use href="#long2-petal" transform="rotate(90 50 50) rotate(90 50 50)"/>  
                <use href="#long2-petal" transform="rotate(-45 50 50)"/>   
                <use href="#long2-petal" transform="rotate(-90 50 50)"/>
                <use href="#long2-petal" transform="rotate(-90 50 50) rotate(-45 50 50)"/>  
                <circle cx="50" cy="50" r="7" fill="url(#gradOrange)"/>
            </g>
        </svg>        
    );
}
 
export default Flower8;