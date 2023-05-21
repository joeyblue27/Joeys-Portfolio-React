
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: "75%",
    flexWrap: 'wrap',
    color: 'white',
  },
  img: {
    height: '50%',
    width: '100%',
  },
  card: {
    height: 'fit-content',
    width: '45%',
    border: 'white solid 1px',
    margin: '1em',
    borderRadius: '5px',
    padding: '.5em',
  },
  button: {
    padding: '5px',
    borderRadius: "10px"
  }
};

function Repo(props) {
  return (
    <div style={styles.container}>
      {}
      {props.programs.map((portfolio, i) =>
        <div className='cards' style={styles.card} key={portfolio.id}>
            <h4>{portfolio.name}</h4>
          <a href={portfolio.link}>
          <img
            alt={portfolio.name}
            className="img"
            src={portfolio.picture}
            style={styles.img}
          />
          </a>
          <p>{portfolio.info}</p>
          <span>   </span>
          <a href={portfolio.repo}><button style={styles.button}>GitHub Repo</button></a>
         
        </div>
      )}
    </div>
  );
};

export default Repo;