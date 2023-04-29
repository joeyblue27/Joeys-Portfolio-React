// imports react
import React from 'react';
// style object for html
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
    padding: '4px',
    borderRadius: "5px"
  }
};
// project function to provide html to be rendered in profile state
function Project(props) {
  return (
    <div style={styles.container}>
      {/* separates the projects prop into individual project objects to be rendered and creates separate html for each project card */}
      {props.projects.map((project, i) =>
        <div className='cards' style={styles.card} key={project.id}>
            <h4>{project.name}</h4>
          <a href={project.link}>
          <img
            alt={project.name}
            className="img"
            src={project.picture}
            style={styles.img}
          />
          </a>
          <p>{project.info}</p>
         
        </div>
      )}
    </div>
  );
};
// exports project function
export default Project;