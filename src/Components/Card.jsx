import React from 'react';
import Flower from './Flower';
import Shape from './Shape';
import Letter from './Letter';
import Number from './Number';

const Card = ({id, card, theme, flipCard}) => {
    
   const renderSelectTheme = themeNum => {
        switch (themeNum) {
            case 0:
                return <Flower num={card} />;
            case 1:
                return <Shape num={card} />;
            case 2:
                return <Letter num={card} />;
            case 3:
                return <Number num={card} />;
            default:
                return <Flower num={card} />;
        }
    }

    const handleClick = e => {
        e.target.parentElement.classList.add('flip');
        e.target.parentElement.style.pointerEvents = 'none';
        flipCard(e.target.parentElement.getAttribute('id'));
    }

    return (  
        <div className="card-container" key={id} id={id} onClick={handleClick}>
            <div className="card card-back">
                { renderSelectTheme(theme) }
            </div>
            <div className="card card-front">
                <svg height="150" width="110" pointerEvents="none">
                    <text className="card-front-text" x="33" y="125" 
                          transform="rotate(300, 33, 125)">Memory
                    </text>
                </svg>
            </div>
        </div>
    );
}
 
export default Card;