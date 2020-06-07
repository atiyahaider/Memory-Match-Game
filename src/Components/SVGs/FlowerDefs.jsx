import React from 'react';

const FlowerDefs = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            {/* <!--- color definitions for Flowers --> */}
            <defs>
                <radialGradient id="gradGreen" cx="50%" cy="50%" r="50%" fx="60%" fy="50%">
                    <stop offset="60%" stopColor="green" />
                    <stop offset="100%" stopColor="darkgreen" />
                </radialGradient>
                <radialGradient id="gradBlue" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                    <stop offset="45%" stopColor="royalblue" />
                    <stop offset="100%" stopColor="blue" />
                </radialGradient>
                <radialGradient id="gradOrange" cx="50%" cy="50%" r="70%" fx="70%" fy="90%">
                    <stop offset="10%" stopColor="#ffd280" />
                    <stop offset="70%" stopColor="orange" />
                    <stop offset="100%" stopColor="#e69500" />
                </radialGradient>
                <radialGradient id="gradLilac" cx="50%" cy="50%" r="60%" fx="80%" fy="70%">
                    <stop offset="0%" stopColor="#f2e6ff" />
                    <stop offset="70%" stopColor="#cc99ff" />
                    <stop offset="100%" stopColor="#b366ff" />
                </radialGradient>
                <radialGradient id="gradMaroon" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="10%" stopColor="#b30000" />
                    <stop offset="70%" stopColor="maroon" />
                    <stop offset="100%" stopColor="#330000" />
                </radialGradient>
                <radialGradient id="gradPink" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="10%" stopColor="#ffe6ea" />
                    <stop offset="70%" stopColor="pink" />
                    <stop offset="100%" stopColor="#ff99aa" />
                </radialGradient>
                <radialGradient id="gradDarkGold" cx="50%" cy="50%" r="50%" fx="60%" fy="50%">
                    <stop offset="20%" stopColor="goldenrod" />
                    <stop offset="100%" stopColor="darkgoldenrod" />
                </radialGradient>
                <radialGradient id="gradGold" cx="50%" cy="50%" r="50%" fx="60%" fy="50%">
                    <stop offset="0%" stopColor="#e8c264" />
                    <stop offset="100%" stopColor="goldenrod" />
                </radialGradient>
                <radialGradient id="gradSaddleBrown" cx="65%" cy="50%" r="50%" fx="80%" fy="50%">
                    <stop offset="0%" stopColor="#eda978" />
                    <stop offset="40%" stopColor="#e37e35" />
                    <stop offset="100%" stopColor="saddlebrown" />
                </radialGradient>
                <radialGradient id="gradMagenta" cx="50%" cy="50%" r="60%" fx="70%" fy="70%">
                    <stop offset="10%" stopColor="#cc00cc" />
                    <stop offset="70%" stopColor="darkmagenta" />
                    <stop offset="100%" stopColor="#660066" />
                </radialGradient>
                <radialGradient id="gradCyan" cx="50%" cy="50%" r="65%" fx="70%" fy="70%">
                    <stop offset="10%" stopColor="turquoise" />
                    <stop offset="75%" stopColor="darkcyan" />
                    <stop offset="100%" stopColor="#0e5850" />
                </radialGradient>
                <radialGradient id="gradYellow" cx="50%" cy="50%" r="65%" fx="70%" fy="70%">
                    <stop offset="10%" stopColor="yellow" />
                    <stop offset="70%" stopColor="gold" />
                    <stop offset="100%" stopColor="#ffcc00" />
                </radialGradient>
            </defs>
        </svg>        
    );
}
 
export default FlowerDefs;