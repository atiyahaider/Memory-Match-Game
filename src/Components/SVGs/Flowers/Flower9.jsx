import React from 'react';

const Flower9 = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="shadow">
            <symbol id="leaf">
                {/* <!-- leaf --> */}
                <path d="M25,75 C10,25 60,40 75,0 C90,30 80,95 25,75Z" fill="url(#gradGreen)" stroke="darkgreen"/>
                {/* <!-- stalk --> */}
                <path d="M25,75 Q15,80 5,80" stroke="darkgreen" strokeWidth="2" fill="none"/>

                {/* <!-- veins --> */}
                {/* <!-- middle vein --> */}
                <path d="M25,75 Q60,60 73,15" stroke="darkgreen" strokeWidth="2" fill="none"/>
                {/* <!-- left veins --> */}
                <path d="M37,68 Q30,63 35,45" stroke="darkgreen" strokeWidth="2" fill="none"/>      
                <path d="M50,59 Q43,51 49,35" stroke="darkgreen" strokeWidth="2" fill="none"/>      
                <path d="M61,44 Q57,40 62,27" stroke="darkgreen" strokeWidth="2" fill="none"/>      
                {/* <!-- right veins --> */}
                <path d="M43,65 Q50,70 64,63" stroke="darkgreen" strokeWidth="2" fill="none"/>
                <path d="M54,52 Q65,55 75,45" stroke="darkgreen" strokeWidth="2" fill="none"/>
                <path d="M64,35 Q70,35 77,27" stroke="darkgreen" strokeWidth="2" fill="none"/>
            </symbol>

            {/* <!-- leaves --> */}
            <g id="flower9">
                <polygon points="2,10 18,5 100,65 80,95" fill="rosybrown"/> 
                <use href="#leaf" x="7" transform="rotate(10 50 50)"/>  
                <use href="#leaf" x="-15" y="-2" transform="rotate(-30 50 50)"/>  
            </g>
        </svg>
    );
}
 
export default Flower9;