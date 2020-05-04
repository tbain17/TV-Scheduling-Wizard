import React from 'react';

export default Show;

const Show = ({show, onShowDelete,}) => {
  return(
    <div className="Show">
    <h3>{show.name}</h3>
    <p>{show.schedule.days[0]}</p>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowDelete(show._id)}>Delete</button>
    </div>
  );
};

export default Show;
