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
    <h1>Filter Shows</h1>
    <p>Filter shows by day and time, or by genre: </p>
    <label>Choose a Day: </label>
    <select id="day-selector" onChange={handleDayChange} defaultValue="default">
      <option disabled value="default">Choose a Day...</option>
      {optionsDays}
    </select>
    <br></br>
    <label>Choose a Time: </label>
    <select id="time-selector" onChange={handleTimeChange} defaultValue="default">
      <option disabled value="default">Choose a Time...</option>
      {options}
    </select>

    </div>
  )
}

export default ShowForm;
