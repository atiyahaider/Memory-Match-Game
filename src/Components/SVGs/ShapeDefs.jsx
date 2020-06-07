import React from 'react';

const ShapeDefs = () => {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            {/* <!--- color definitions for Shapes ---> */}
            <defs>
                <radialGradient id="gradBlue" cx="50%" cy="70%" r="65%" fx="50%" fy="50%">
                    <stop offset="35%" stopColor="royalblue" />
                    <stop offset="100%" stopCcolor="blue" />
                </radialGradient>
                <radialGradient id="gradOrange" cx="50%" cy="50%" r="70%" fx="70%" fy="90%">
                    <stop offset="10%" stopColor="#ffd280" />
                    <stop offset="70%" stopColor="orange" />
                    <stop offset="100%" stopColor="#e69500" />
                </radialGradient>
                <radialGradient id="gradPink" cx="50%" cy="50%" r="60%" fx="30%" fy="70%">
                    <stop offset="10%" stopColor="#f0c2d1" />
                    <stop offset="50%" stopColor="palevioletred" />
                    <stop offset="100%" stopColor="#b82e5c" />
                </radialGradient>
                <radialGradient id="gradGold" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="20%" stopColor="#e8c264" stopOpacity="0.75"/>
                    <stop offset="70%" stopColor="goldenrod" stopOpacity="0.85"/>
                    <stop offset="100%" stopColor="darkgoldenrod" />
                </radialGradient>
                <radialGradient id="gradCyan" cx="50%" cy="50%" r="50%" fx="55%" fy="70%">
                    <stop offset="10%" stopColor="turquoise" stopOpacity="0.6"/>
                    <stop offset="80%" stopColor="darkcyan" stopOpacity="0.75"/>
                    <stop offset="100%" stopColor="#006666" stopOpacity="0.85"/>
                </radialGradient>
                <radialGradient id="gradMaroon" cx="50%" cy="50%" r="50%" fx="20%" fy="70%">
                    <stop offset="30%" stopColor="#b30000" stopOpacity="0.8"/>
                    <stop offset="70%" stopColor="maroon" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#330000" stopOpacity="0.9"/>
                </radialGradient>
                <radialGradient id="gradGreen" cx="60%" cy="50%" r="50%" fx="70%" fy="80%">
                    <stop offset="20%" stopColor="green" stopOpacity="0.95"/>
                    <stop offset="70%" stopColor="darkgreen"/>
                    <stop offset="100%" stopColor="#004d00"/>
                </radialGradient>
                <radialGradient id="gradMagenta" cx="50%" cy="50%" r="60%" fx="70%" fy="70%">
                    <stop offset="10%" stopColor="#cc00cc" />
                    <stop offset="70%" stopColor="darkmagenta" />
                    <stop offset="100%" stopColor="#660066" />
                </radialGradient>
                <radialGradient id="gradOlive" cx="50%" cy="50%" r="60%" fx="70%" fy="70%">
                    <stop offset="0%" stopColor="#cccc00" />
                    <stop offset="60%" stopColor="olive" />
                    <stop offset="100%" stopColor="#4d4d00" />
                </radialGradient>
            </defs>
        </svg>
    );
}
 
export default ShapeDefs;