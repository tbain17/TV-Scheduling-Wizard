import React from 'react';

  const ShowForm = (props) => {
    let uniqueTimes = []
    let days = []
    let genres = []
    props.filteredShows.forEach(show => {
      if (!uniqueTimes.includes(show.schedule.time)) (
        uniqueTimes = [...uniqueTimes, show.schedule.time]
      )})

    props.shows.forEach(show => {
      show.schedule.days.forEach(day => {
      if (!days.includes(day)) {
        days = [...days, day]
      }})})

    props.shows.forEach(show => {
      show.genres.forEach(genre => {
      if (!genres.includes(genre)) {
        genres = [...genres, genre]
      }})})


    const options = uniqueTimes.map(time => {
      return <option value={time} >{time}</option>
    })

    const optionsDays = days.map(day => {
      return <option value={day} >{day}</option>
    })

    const optionsGenres = genres.map(genre => {
      return <option value={genre}>{genre}</option>
    })

  function handleTimeChange(event) {
    props.onTimeSelected(event.target.value);

  }
  function handleDayChange(event) {
    props.onDaySelected(event.target.value);
  }

  function handleGenreChange(event) {
    props.onGenreSelected(event.target.value);
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
    <select id="genre-selector" onChange={handleGenreChange} defaultValue="default">
      <option disabled value="default">Choose a genre...</option>
      {optionsGenres}
    </select>

    </div>
  )
}

export default ShowForm;
