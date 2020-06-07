import React from 'react';

const GameOver = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="450" height="200" viewBox="0 0 250 100">
            <defs>
                <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
                    <stop offset="0%" stopColor="orange" />
                    <stop offset="100%" stopColor="yellow" />
                </radialGradient>
            </defs>

        
            <path d="M65,5 
                    Q75,30 110,10  Q125,40 150,18 
                    Q165,40 190,15 Q200,45 240,35 
                    Q220,55 245,70 Q200,70 195,95 
                    Q170,80 150,90 Q130,70 100,93 
                    Q85,70 60,80 Q45,55 20,70 
                    Q20,40 5,40 Q25,35 25,15 
                    Q45,25 65,5Z" stroke="black" fill="url(#gradYellow)" transform="rotate(-5 50 50) translate(0 5)"/> 

            <text x="20" y="56" stroke="green" fill="green" fontSize="1.85rem">Oops! Time's Up!</text>
      </svg>        
    );
}
 
export default GameOver;