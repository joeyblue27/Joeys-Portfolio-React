// import react and projects

import React from 'react';
import LinkInfo from './LinkInfo';
import Javaquiz from '../assets/images/javaquiz.png';
import Encrypt from '../assets/images/encryptcreator.png';
import Memo from '../assets/images/memotaker.png';
import Videogame from '../assets/images/videogame.jpeg';
import Weather from '../assets/images/weather.png';
import Expedal from '../assets/images/expedal.png';



// flex styling

const styling = {
  section: {
    display: 'flex',
    justifyContent: 'center',
  }
};

// project objects and properties 

const programs = [
  {
    id: '0',
    name: 'PedalBoard-Saver',
    picture: Expedal,
    link: 'https://polar-fortress-83075.herokuapp.com/',
    repo: 'https://github.com/joeyblue27/PedalBoard-Saver'
  },
  {
    id: '1',
    name: 'Coffee Sippers Javascript Quiz',
    picture: Javaquiz,
    link: 'https://joeyblue27.github.io/Coffee-Sippers-Javascript-Quiz/',
    repo: 'https://github.com/joeyblue27/Coffee-Sippers-Javascript-Quiz'
  },
  {
    id: '2',
    name: 'Skycast Weather Dashboard',
    picture: Weather,
    link: 'https://joeyblue27.github.io/Skycast-Weather-Dashboard/',
    repo: 'https://github.com/joeyblue27/Skycast-Weather-Dashboard'
  },
  {
    id: '3',
    name: 'Videogame Review',
    picture: Videogame,
    link: 'https://safe-eyrie-62856.herokuapp.com/login',
    repo: 'https://github.com/lesley-byte/videogame-review'
  },
  {
    id: '4',
    name: 'Pocket Memo Taker',
    picture: Memo,
    link: 'https://pocket-memo-taker.herokuapp.com/',
    repo: 'https://github.com/joeyblue27/Pocket-Memo-Taker'
  },
  {
    id: '5',
    name: 'Encryption Creator',
    picture: Encrypt,
    link: 'https://joeyblue27.github.io/Encryption-Creator/',
    repo: 'https://github.com/joeyblue27/Encryption-Creator'
  },






];

// render html programs
 
function Links() {
 
  return (
    <div style={styling.section}>
      <LinkInfo programs={programs} />
    </div>
  );
};

export default Links;