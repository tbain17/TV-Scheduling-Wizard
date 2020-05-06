import React from 'react';
  import '../containers/Showcontainer.css';

const Show = ({show, onShowAdded}) => {
  return(
    <div className="Show">
    <h3><a href={show.url}>{show.name}</a></h3>
    <h3>{show.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowAdded(show)}>Add to Schedule</button>
    </div>
  );
};

export default Show;
