import React from 'react';

const ScheduleItem = ({scheduleItem, onScheduleDelete}) => {
  return(
    <div className="Schedule">
    <h3>{schedule.name}</h3>
    <h3>{schedule.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{schedule.schedule.time}</p>
    <button onClick={() => onScheduleDelete(schedule._id)}>Remove from Schedule</button>
    </div>
  );
};

export default ScheduleItem;
