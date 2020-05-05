import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ schedule, onScheduleDelete }) => {
  const scheduleItemNodes = schedule.map(schedule => (
    <ScheduleItem
    key={scheduleItem._id}
    show={scheduleItem}
    onShowAdded={onScheduleDelete}></ScheduleItem>
  ));

  return (
    <div id="scheduleList">
    {scheduleItemNodes}
    </div>
  )
}

export default ScheduleList;
