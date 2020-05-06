import React from 'react';

  const ShowForm = (props) => {
    let uniqueTimes = []
    let days = []
    props.filteredShows.forEach(show => {
      if (!uniqueTimes.includes(show.schedule.time)) (
        uniqueTimes = [...uniqueTimes, show.schedule.time]
      )})

    props.shows.map(show => {
      show.schedule.days.forEach(day => {
      if (!days.includes(day)) {
        days = [...days, day]
      }})})


    const options = uniqueTimes.map(time => {
      return <option value={time} >{time}</option>
    })

    const optionsDays = days.map(day => {
      return <option value={day} >{day}</option>
    })

  function handleTimeChange(event) {
    props.onTimeSelected(event.target.value);

  }
  function handleDayChange(event) {
    props.onDaySelected(event.target.value);

  }

  return (
    <div>
    <select id="day-selector" onChange={handleDayChange} defaultValue="default">
      <option disabled value="default">Choose a day...</option>
      {optionsDays}
    </select>
    <select id="time-selector" onChange={handleTimeChange} defaultValue="default">
      <option disabled value="default">Choose a time...</option>
      {options}
    </select>

    </div>
  )
}

export default ShowForm;
