import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ schedule, onScheduleDelete }) => {
  const scheduleItemNodes = schedule.map(scheduleItem => (
    <ScheduleItem
    key={scheduleItem._id}
    scheduleItem={scheduleItem}
    onScheduleDelete={onScheduleDelete}></ScheduleItem>
  ));

  return (
    <div id="scheduleList">
    {scheduleItemNodes}
    </div>
  )
}

export default ScheduleList;
