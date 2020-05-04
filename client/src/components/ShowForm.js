import React from 'react';

const ShowForm = (props) => {
  const options = props.shows.map(show => {
    return <option value={show.schedule.time} key={show.id}>{show.schedule.time}</option>
  })

  function handleChange(event) {
    props.onShowSelected(event.target.value);
  }

  return (
    <select id="show-form" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Time</option>
      {options}
    </select>
  )
}

export default ShowForm;
