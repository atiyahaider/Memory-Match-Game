import React from 'react';
import FlowerDefs from './SVGs/FlowerDefs';
import ShapeDefs from './SVGs/ShapeDefs';

const Defs = ({theme}) => {
    return (  
        <div className="svgDefs">
            { theme === 0 && <FlowerDefs /> }
            { theme === 1 && <ShapeDefs /> }
        </div>
    );
}
 
export default Defs;