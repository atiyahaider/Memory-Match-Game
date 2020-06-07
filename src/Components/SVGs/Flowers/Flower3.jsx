import React from 'react';

const Flower3 = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="pointy-petal">
                <path d="M50,45 C25,30 55,25 50,0 C67,35 63,38 50,45" fill="url(#gradLilac)"/>
            </symbol>

            {/* <!-- lilac pointy flower --> */}
            <g id="flower2">
                <rect x="10" y="15" width="70" height="60" transform="rotate(20 50 50)" fill="#400080"/> 
                <use href="#pointy-petal"/>  
                <use href="#pointy-petal" transform="rotate(72 50 50)"/>  
                <use href="#pointy-petal" transform="rotate(90 50 50) rotate(54 50 50)"/>  
                <use href="#pointy-petal" transform="rotate(-72 50 50)"/>  
                <use href="#pointy-petal" transform="rotate(-90 50 50) rotate(-54 50 50)"/>  
                <circle cx="50" cy="50" r="7" fill="url(#gradYellow)"/>
            </g>
        </svg>
    );
}

export default Flower3;