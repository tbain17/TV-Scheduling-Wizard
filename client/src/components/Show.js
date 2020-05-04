import React from 'react';

export default Show;

const Show = ({show, onShowDelete,}) => {
  return(
    <div className="Show">
    <h3>{show.name}</h3>
    <p>{show.day}</p>
    <p>{show.time}</p>
    
  )
}
