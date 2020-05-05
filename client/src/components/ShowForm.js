import React from 'react';

  const ShowForm = (props) => {
    let uniqueTimes = []
    props.shows.map(show => {
      if (!uniqueTimes.includes(show.schedule.time)) (
        uniqueTimes = [...uniqueTimes, show.schedule.time]
  )})

    const options = uniqueTimes.map(time => {
      return <option value={time} >{time}</option>
    })

  function handleChange(event) {
    props.onTimeSelected(event.target.value);
  }

  return (
    <select id="time-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a time...</option>
      {options}
    </select>
  )
}

export default ShowForm;
