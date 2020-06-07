import React from 'react';

const colors = ['darkRed', 'deepPink', 'teal', 'darkGreen', 'blue', 'black', 'rebeccaPurple', 'gold', '#e06f1f'];

const Letter = ({ num }) =>  {
  let letter = String.fromCharCode(num + 64);

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 100 100" className="shadow">
      <text x="50" y="40" fontFamily="Apex Lake"
                          fontSize="90px"      
                          fill={colors[num-1]}
                          alignmentBaseline="middle"
                          textAnchor="middle">
      {letter}</text>
    </svg>
  )
}

export default Letter;