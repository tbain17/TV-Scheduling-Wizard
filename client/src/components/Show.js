import React from 'react';


const Show = ({show, onShowDelete,}) => {
  const days = {show.schedule.days.map((day) => {return (day)})}
  return(
    <div className="Show">
    <h3>{show.name}</h3>
    <ul>{days}</ul>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowDelete(show._id)}>Delete</button>
    </div>
  );
};

export default Show;
