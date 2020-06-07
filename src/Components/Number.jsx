import React from 'react';

const colors = ['darkRed', 'deepPink', 'teal', 'darkGreen', 'blue', 'black', 'rebeccaPurple', 'gold', '#e06f1f'];

const Number = ({ num }) =>  {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 100 100" className="shadow">
      <line x1="8" y1="0" x2="92" y2="0" stroke={colors[num-1]} strokeWidth="3" />
      <line x1="8" y1="5" x2="92" y2="5" stroke={colors[num-1]} strokeWidth="3" stroke-dasharray="5,5"/>
      <text x="50" y="61" fontFamily="Hidden Vines"
                          fontSize="90px"
                          fill={colors[num-1]}
                          alignmentBaseline="middle"
                          textAnchor="middle">
      {num}</text>
      <line x1="8" y1="95" x2="92" y2="95" stroke={colors[num-1]} strokeWidth="3" stroke-dasharray="5,5"/>
      <line x1="8" y1="100" x2="92" y2="100" stroke={colors[num-1]} strokeWidth="3" />
    </svg>
  )
}

export default Number;