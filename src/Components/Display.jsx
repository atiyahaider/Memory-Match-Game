import React from 'react';

const Display = ({started, timer, score, flips, startGame, theme, selectTheme}) => {

    const handleSelectTheme = e => {
        selectTheme(e.target.value);
    };
    
    if (!started)
        return ( 
            <div id="display-container">
                <button className="button" onClick={startGame}>Start</button>
                <div id="theme-select">Theme:&nbsp;
                    <select className="button" onChange={handleSelectTheme} value={theme}>
                        <option value="0">Flowers</option>
                        <option value="1">Shapes</option>
                        <option value="2">Letters</option>
                        <option value="3">Numbers</option>
                    </select>
                </div>
            </div>
        );
    else
        return (
            <div id="display-container">
                <div id="timer" className="display-item">
                    <div>Timer:</div><div>{timer}</div>
                </div>
                <div id="score" className="display-item">
                    <div>Score:</div><div>{score}</div>
                </div>
                <div className="display-item">
                    <div id="flips">Flips:</div><div id="flips-amt">{flips}</div>
                </div>
            </div>
        );
}

export default Display;