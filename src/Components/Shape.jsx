import React from 'react';

function importAll(req) {
  let images = {};
  req.keys().forEach( item => { 
    images[item.replace(/(\.\/)/g, '')] = req(item).default; 
  });
  return images;
}

const images = importAll(require.context('./SVGs/Shapes', false, /\.jsx$/));

const Shape = ({ num }) =>  {
  let Comp = images['Shape' + num + '.jsx'];

  return(
    <Comp />
  )
}

export default Shape;