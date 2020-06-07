import React from 'react';

const Flower6 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            {/* <!-- petals --> */}
            <symbol id="sun-petal-small">
                <path d="M50,50 C45,30 40,15 50,0 C60,15 55,30 50,50" fill="url(#gradDarkGold)"/>
            </symbol>
            <symbol id="sun-petal-long">
                <path d="M50,50 C45,30 40,15 50,0 C60,15 55,30 50,50" fill="url(#gradGold)"/>
            </symbol>
            <symbol id="sunflower-seed">
                <circle cx="2" cy="2" r="2" fill="black"/>
            </symbol>

            {/* <!-- sunflower --> */}
            <g id="flower5">
                <polygon points="2,70 85,3 100,60 10,100" fill="darkolivegreen"/> 
                {/* <!-- small petals --> */}
                <use href="#sun-petal-small" transform="rotate(15 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(45 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(75 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(90 50 50) rotate(15 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(90 50 50) rotate(45 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(90 50 50) rotate(75 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-15 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-45 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-75 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-90 50 50) rotate(-15 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-90 50 50) rotate(-45 50 50)"/>  
                <use href="#sun-petal-small" transform="rotate(-90 50 50) rotate(-75 50 50)"/>  

                {/* <!-- large petals --> */}
                <use href="#sun-petal-long"/>  
                <use href="#sun-petal-long" transform="rotate(30 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(60 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(90 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(90 50 50) rotate(30 50 50)"/>  
                <use href="#sun-petal-long" transform="rotate(90 50 50) rotate(60 50 50)"/>  
                <use href="#sun-petal-long" transform="rotate(90 50 50) rotate(90 50 50)"/>  
                <use href="#sun-petal-long" transform="rotate(-30 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(-60 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(-90 50 50)"/>
                <use href="#sun-petal-long" transform="rotate(-90 50 50) rotate(-30 50 50)"/>  
                <use href="#sun-petal-long" transform="rotate(-90 50 50) rotate(-60 50 50)"/>  
                <circle cx="50" cy="50" r="25" fill="url(#gradSaddleBrown)"/>
                {/* <!--- seeds --> */}
                <use href="#sunflower-seed" x="53" y="49"/>
                <use href="#sunflower-seed" x="65" y="48"/>
                <use href="#sunflower-seed" x="40" y="45"/>
                <use href="#sunflower-seed" x="35" y="60"/>
                <use href="#sunflower-seed" x="60" y="58"/>
                <use href="#sunflower-seed" x="55" y="30"/>
                <use href="#sunflower-seed" x="45" y="35"/>
                <use href="#sunflower-seed" x="32" y="38"/>
                <use href="#sunflower-seed" x="45" y="65"/>
                <use href="#sunflower-seed" x="61" y="37"/>
                <use href="#sunflower-seed" x="30" y="50"/>
                <use href="#sunflower-seed" x="45" y="52"/>
            </g>
        </svg>
    );
}
 
export default Flower6;