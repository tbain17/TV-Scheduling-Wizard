import React from 'react';
import ScheduleItem from './ScheduleItem';
import '../containers/Showcontainer.css';

const ScheduleList = ({ schedule, onScheduleDelete }) => {
  const scheduleItemNodes = schedule.map(scheduleItem => (
    <ScheduleItem
    key={scheduleItem._id}
    scheduleItem={scheduleItem}
    onScheduleDelete={onScheduleDelete}></ScheduleItem>
  ));

  return (
    <div id="scheduleList" className="schedule-list">
    {scheduleItemNodes}
    </div>
  )
}

export default ScheduleList;
