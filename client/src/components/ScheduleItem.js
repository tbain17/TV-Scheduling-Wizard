import React from 'react';

const ScheduleItem = ({scheduleItem, onScheduleDelete, clashMessage}) => {
  return(
    <div className="schedule">
    <h3>{scheduleItem.name}</h3>
    <p>{scheduleItem.schedule.days.map((day) => {return `${day} `})}</p>
    <p>{scheduleItem.schedule.time}</p>
    <p>{scheduleItem.network?.name}</p>
    <p>{clashMessage}</p>
    <button onClick={() => onScheduleDelete(scheduleItem._id)}>Remove from Schedule</button>
    </div>
  );
};

export default ScheduleItem;
