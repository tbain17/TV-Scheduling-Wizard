import React from 'react';
import ScheduleItem from './ScheduleItem';
import '../containers/Showcontainer.css';

const ScheduleList = ({ schedule, onScheduleDelete }) => {
  function getClashes (scheduleItem, schedule) {
    return schedule.filter(item => {
      return item.schedule.days.filter(itemDay => {
        return scheduleItem.schedule.days.includes(itemDay)
      }).length && item.schedule.time === scheduleItem.schedule.time && scheduleItem.id !== item.id;
    });
  }

  const scheduleItemNodes = schedule.map(scheduleItem => {
    const clashMessage = (getClashes(scheduleItem, schedule).length) ?
      "This show clashes with another one in your schedule!" : null;

    return (
      <ScheduleItem
      key={scheduleItem._id}
      scheduleItem={scheduleItem}
      onScheduleDelete={onScheduleDelete}
      clashMessage={clashMessage}
      >
      </ScheduleItem>
    )
  });

  return (
    <div id="scheduleList" className="schedule-list">
    {scheduleItemNodes}
    </div>
  )
}

export default ScheduleList;
