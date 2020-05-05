import React from 'react';

const ScheduleItem = ({scheduleItem, onScheduleDelete}) => {
  return(
    <div className="Schedule">
    <h3>{scheduleItem.name}</h3>
    <h3>{scheduleItem.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{scheduleItem.schedule.time}</p>
    <p>{scheduleItem.network.name}</p>
    <button onClick={() => onScheduleDelete(scheduleItem._id)}>Remove from Schedule</button>
    </div>
  );
};

export default ScheduleItem;
