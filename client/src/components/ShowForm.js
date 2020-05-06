import React from 'react';

  const ShowForm = (props) => {
    let uniqueTimes = []
    let days = []
    let genres = ["no selection"]
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
      if (!props.filteredShows.length) {
      return <option value={genre}>{genre}</option>
    }})

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
    <label>Choose a genre: </label>
    <select id="genre-selector" onChange={handleGenreChange} defaultValue="default">
      <option disabled value="default">Choose a genre...</option>
      {optionsGenres}
    </select>

    </div>
  )
}

export default ShowForm;
