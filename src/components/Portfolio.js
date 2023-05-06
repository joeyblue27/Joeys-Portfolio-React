

import React from 'react';

import Project from './Project';


import Javaquiz from '../assets/images/javaquiz.png';
import Pedals from '../assets/images/expedal.png';
import Encrypt from '../assets/images/encryptcreator.png';
import Memo from '../assets/images/memotaker.png';
import Space from '../assets/images/space.png';
import Videogame from '../assets/images/videogame.jpeg';
import Weather from '../assets/images/weather.png';




const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '100%',
    paddingBottom: '100px',
 
  }
};

const projects = [
  {
    id: '0',
    name: 'PedalBoard Saver ',
    picture: Pedals,
    link: 'https://polar-fortress-83075.herokuapp.com/',
  },
  {
    id: '1',
    name: 'Coffee Sippers Javascript Quiz',
    picture: Javaquiz,
    link: 'https://joeyblue27.github.io/Coffee-Sippers-Javascript-Quiz/',
  },
  {
    id: '2',
    name: 'Skycast Weather Dashboard',
    picture: Weather,
    link: 'https://joeyblue27.github.io/Skycast-Weather-Dashboard/',
  },
  {
    id: '3',
    name: 'Videogame Review',
    picture: Videogame,
    link: 'https://safe-eyrie-62856.herokuapp.com/login',
  },
  {
    id: '4',
    name: 'Space Encyclopedia',
    picture: Space,
    link: 'https://humzashaukat.github.io/SpaceEncyclopedia/index.html',
  },
  {
    id: '5',
    name: 'Pocket Memo Taker',
    picture: Memo,
    link: 'https://pocket-memo-taker.herokuapp.com/',
  },
  {
    id: '6',
    name: 'Encryption Creator',
    picture: Encrypt,
    link: 'https://joeyblue27.github.io/Encryption-Creator/',
  },






];

function Portfolio() {
 
  return (
    <section style={styles.section}>
      <Project projects={projects} />
    </section>
  );
};

export default Portfolio;