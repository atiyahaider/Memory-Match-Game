import React from 'react';

const Win = ({score, flips}) => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="450" height="200" viewBox="0 0 250 120">
            <defs>
                <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
                    <stop offset="0%" stopColor="orange" />
                    <stop offset="100%" stopColor="yellow" />
                </radialGradient>
                <radialGradient id="gradRed" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
                    <stop offset="0%" stopColor="orange" />
                    <stop offset="100%" stopColor="red" />
                </radialGradient>
                <radialGradient id="gradGreen" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
                    <stop offset="0%" stopColor="green" />
                    <stop offset="100%" stopColor="black" />
                </radialGradient>
            </defs>

            <symbol id="star">
                <path d="M5,7.3 L8.7,10 L7.5,6 L10,3.7 L6.5,3.5 L5,0 L3.5,3.5 L0,3.7 L2.5,6 L1.3,10Z" /> 
            </symbol>
            <symbol id="triangle">
                <polygon points="3,2 7,0 6,15"/> 
            </symbol>
        
            <path d="M65,5 
                    Q75,30 110,10  Q125,40 150,18 
                    Q165,40 190,15 Q210,50 240,35 
                    Q220,55 245,70 Q200,70 195,95 
                    Q170,80 150,90 Q130,70 100,93 
                    Q85,70 60,80 Q45,55 20,70 
                    Q20,40 5,40 Q25,35 25,15 
                    Q45,25 65,5Z" stroke="black" fill="url(#gradYellow)" transform="rotate(-10 50 50) translate(-2 12)"/>

            <text x="58" y="63" stroke="green" fill="green" fontSize="2.5rem">You Win!</text>

            <use href="#star" x="25" y="20" fill="url(#gradYellow)"/>
            <use href="#star" x="60" y="13" fill="url(#gradRed)"/>
            <use href="#star" x="100" y="18" fill="url(#gradGreen)"/>
            <use href="#star" x="120" y="7" fill="url(#gradRed)"/>        
            <use href="#star" x="155" y="10" fill="url(#gradYellow)"/>
            <use href="#star" x="200" y="25" fill="url(#gradGreen)"/>
            <use href="#star" x="10" y="55" fill="url(#gradGreen)" transform="scale(0.75)"/>
            <use href="#star" x="10" y="70" fill="url(#gradRed)"/>        
            <use href="#star" x="40" y="70" fill="url(#gradRed)" transform="scale(0.75)"/>        
            <use href="#star" x="145" y="5" fill="url(#gradYellow)" transform="scale(0.75)"/>
            <use href="#star" x="75" y="5" fill="url(#gradYellow)" transform="scale(0.75)"/>
            <use href="#star" x="50" y="85" fill="url(#gradGreen)"/>
            <use href="#star" x="180" y="75" fill="url(#gradGreen)"/>
            <use href="#star" x="180" y="90" fill="url(#gradGreen)" transform="scale(0.75)"/>
            <use href="#star" x="265" y="45" fill="url(#gradRed)" transform="scale(0.65)"/>        
            <use href="#star" x="210" y="45" fill="url(#gradRed)"/>        
            <use href="#star" x="125" y="80" fill="url(#gradRed)"/>        
            <use href="#star" x="120" y="135" fill="url(#gradRed)" transform="scale(0.65)"/>        
            <use href="#star" x="235" y="20" fill="url(#gradYellow)"/>
            <use href="#star" x="190" y="5" fill="url(#gradYellow)"/>
            <use href="#star" x="160" y="85" fill="url(#gradYellow)"/>
            <use href="#star" x="50" y="125" fill="url(#gradYellow)" transform="scale(0.65)"/>
            <use href="#star" x="280" y="90" fill="url(#gradYellow)" transform="scale(0.75)"/>
            <use href="#star" x="350" y="90" fill="url(#gradGreen)" transform="scale(0.65)"/>
            
            <use href="#triangle" x="30" y="18" fill="url(#gradGreen)" transform="rotate(-20 5 7)"/>
            <use href="#triangle" x="80" y="0" fill="url(#gradYellow)" transform="rotate(-10 125 50)"/>
            <use href="#triangle" x="115" y="0" fill="url(#gradGreen)" transform="rotate(20 125 50)"/>
            <use href="#triangle" x="190" y="-80" fill="url(#gradRed)" transform="rotate(30 50 1)"/>
            <use href="#triangle" x="40" y="-3" fill="url(#gradYellow)" transform="rotate(-110 50 50)"/>
            <use href="#triangle" x="25" y="7" fill="url(#gradRed)" transform="rotate(220 50 50)"/>
            <use href="#triangle" x="-45" y="3" fill="url(#gradGreen)" transform="rotate(180 50 50)"/>
            <use href="#triangle" x="-53" y="-98" fill="url(#gradRed)" transform="rotate(130 50 50)"/>

            <text x="20" y="115"  fill="url(#gradYellow)">Score: {score}</text>
            <text x="180" y="115" fill="url(#gradRed)">Flips: {flips}</text>
      </svg>        
    );
}
 
export default Win;