import React from 'react';
import './ShowForm.css';

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
    props.onShowSelected(event.target.value);
  }

  return (
    <body id="grid" className="show-form">
    <select id="show-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a time...</option>
      {options}
    </select>
    </body>
  )
}

export default ShowForm;
