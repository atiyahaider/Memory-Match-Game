import React from 'react';

const Flower1 = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="bell-flower">
                <path d="M36.5,44.5 Q45,70 40,80 Q37,86 33,88 Q44,89 49,80 Q57,63 48,33" fill="url(#gradBlue)"/>
                <path d="M71.5,44.5 Q70,70 77,80 Q81,86 85,88 Q78,90 68,80 Q55,65 60,33" fill="url(#gradBlue)"/>
                <path d="M48,33 Q57,63 49,80 Q55,83 58,90 Q62,83 68,80 Q55,65 60,33" fill="url(#gradBlue)"/>
                <path d="M37,37 A18,27 0 0 1 72,45 L60,33 L55,45 L48,33 L36,45Z" fill="url(#gradGreen)"/>
                <path d="M15,95 L18,30 C19,5 47,5 54,19" stroke="darkgreen" strokeWidth="2" fill="none"/>
            </symbol>

            {/* <!-- blue bell flower --> */}
            <g id="flower1">
                <rect x="15" y="25" width="70" height="60" transform="rotate(40 50 50)" fill="#ffa64d"/> 
                <use href="#bell-flower"/>  
            </g>
        </svg>
    );
}
 
export default Flower1;