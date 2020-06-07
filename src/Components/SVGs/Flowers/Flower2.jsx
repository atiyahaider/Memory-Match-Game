import React from 'react';

const Flower2 = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="long-petal">
                <path d="M47,45 C35,-14 65,-15 53,45" fill="url(#gradOrange)"/>
            </symbol>

            {/* <!-- orange long petal flower --> */}
            <g id="flower2">
                <rect x="10" y="20" width="80" height="60" transform="rotate(-20 50 50)" fill="cadetblue"/> 
                <use href="#long-petal"/>  
                <use href="#long-petal" transform="rotate(30 50 50)"/>  
                <use href="#long-petal" transform="rotate(60 50 50)"/>  
                <use href="#long-petal" transform="rotate(90 50 50)"/>
                <use href="#long-petal" transform="rotate(90 50 50) rotate(30 50 50)"/>  
                <use href="#long-petal" transform="rotate(90 50 50) rotate(60 50 50)"/>  
                <use href="#long-petal" transform="rotate(90 50 50) rotate(90 50 50)"/> 
                <use href="#long-petal" transform="rotate(-30 50 50)"/>  
                <use href="#long-petal" transform="rotate(-60 50 50)"/>  
                <use href="#long-petal" transform="rotate(-90 50 50)"/>
                <use href="#long-petal" transform="rotate(-90 50 50) rotate(-30 50 50)"/>  
                <use href="#long-petal" transform="rotate(-90 50 50) rotate(-60 50 50)"/>  
                <circle cx="50" cy="50" r="7" fill="#805300"/>
            </g>
        </svg>        
     );
}
 
export default Flower2;