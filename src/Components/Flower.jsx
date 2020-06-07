import React from 'react';

function importAll(req) {
  let images = {};
  req.keys().forEach( item => { 
    images[item.replace(/(\.\/)/g, '')] = req(item).default; 
  });
  return images;
}

const images = importAll(require.context('./SVGs/Flowers', false, /\.jsx$/));

const Flower = ({ num }) =>  {
  let Comp = images['Flower' + num + '.jsx'];

  return(
    <Comp />
  )
}

export default Flower;