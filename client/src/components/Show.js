import React from 'react';
  import '../containers/Showcontainer.css';

const Show = ({show, onShowAdded}) => {
  const summary = show.summary
  const summaryEdited = summary.replace(/<[^>]*>/g,'')
  return(
    <div className="show">
    <h1>{show.name}</h1>
    <img src={show.image.medium} alt=""/>
    <h4>{summaryEdited}</h4>
    <h3><a href={show.url} target='_blank'>More Information</a></h3>
    <h3>{show.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowAdded(show)}>Add to Schedule</button>
    </div>
  );
};

export default Show;
