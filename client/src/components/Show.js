import React from 'react';

const Show = ({show, onShowAdded}) => {
  return(
    <div className="Show">
    <h3>{show.name}</h3>
    <h3>{show.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowAdded(show._id)}>Add to Schedule</button>
    </div>
  );
};

export default Show;
