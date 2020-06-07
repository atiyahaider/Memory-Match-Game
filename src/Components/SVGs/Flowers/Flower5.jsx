import React from 'react';

const Flower5 = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="round-petal">
                <path d="M50,50 C0,-10 100,-10 50,50" fill="url(#gradPink)"/>
            </symbol>

            {/* <!-- pink round petal flower --> */}
            <g id="flower5">
                <polygon points="10,90 30,3 100,100" fill="#7ea800"/> 
                <use href="#round-petal"/>  
                <use href="#round-petal" transform="rotate(60 50 50)"/>
                <use href="#round-petal" transform="rotate(90 50 50) rotate(30 50 50)"/>  
                <use href="#round-petal" transform="rotate(-60 50 50)"/>
                <use href="#round-petal" transform="rotate(-90 50 50) rotate(-30 50 50)"/>  
                <use href="#round-petal" transform="rotate(90 50 50) rotate(90 50 50)"/>  
                <circle cx="50" cy="50" r="8" fill="url(#gradYellow)"/>
            </g>
        </svg>
    );
}
 
export default Flower5;