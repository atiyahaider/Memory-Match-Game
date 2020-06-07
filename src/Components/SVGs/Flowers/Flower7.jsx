import React from 'react';

const Flower7 = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="clipped-petal">
                <path d="M50,50 C40,40 25,20 45,0 L50,6 L55,0 C75,20 60,40 50,50" fill="url(#gradMagenta)"/>
            </symbol>

            {/* <!--- magenta clipped petal flower --> */}
            <g id="flower7">
                <polygon points="12,12 85,15 100,50 5,80" fill="darkkhaki"/> 
                <use href="#clipped-petal"/>  
                <use href="#clipped-petal" transform="rotate(72 50 50)"/>   
                <use href="#clipped-petal" transform="rotate(90 50 50) rotate(54 50 50)"/>  
                <use href="#clipped-petal" transform="rotate(-72 50 50)"/> 
                <use href="#clipped-petal" transform="rotate(-90 50 50) rotate(-54 50 50)"/>  
                <circle cx="50" cy="50" r="7" fill="url(#gradPink)"/>
            </g>
        </svg>        
    );
}
 
export default Flower7;