import React from 'react';

const Flower4 = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="heart-petal">
                <path d="M50,44 C25,35 22,-10 50,10 C78,-10 75,35 50,44" fill="url(#gradMaroon)"/>
            </symbol>
            <symbol id="filament">
                <path d="M50,42 Q52,35 50,27" stroke="yellow" fill="none"/>
                <circle cx="50" cy="27" r="2" fill="url(#gradYellow)"/>
            </symbol>

            {/* <!-- maroon heart shaped flower --> */}
            <g id="flower4">
                <polygon points="10,100 20,10 100,0" fill="lightgrey"/> 
                <use href="#heart-petal"/>  
                <use href="#heart-petal" transform="rotate(72 50 50)"/>  
                <use href="#heart-petal" transform="rotate(90 50 50) rotate(54 50 50)"/>  
                <use href="#heart-petal" transform="rotate(-72 50 50)"/> 
                <use href="#heart-petal" transform="rotate(-90 50 50) rotate(-54 50 50)"/>  
                <circle cx="50" cy="50" r="8" fill="url(#gradYellow)"/>
                <use href="#filament"/>  
                <use href="#filament" transform="rotate(60 50 50)"/>  
                <use href="#filament" transform="rotate(90 50 50)"/>  
                <use href="#filament" transform="rotate(90 50 50) rotate(50 50 50)"/>  
                <use href="#filament" transform="rotate(-60 50 50)"/>  
                <use href="#filament" transform="rotate(-90 50 50)"/>  
                <use href="#filament" transform="rotate(-90 50 50) rotate(-50 50 50)"/>  
            </g>
        </svg>
    );
}
 
export default Flower4;