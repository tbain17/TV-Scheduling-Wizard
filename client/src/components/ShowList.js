import React from 'react';
import Show from './Show';

const ShowList = ({ shows, onShowAdded, filteredShows , filteredShowsbyGenre, filteredShowsbyDay}) => {
  let givenShows = shows
  if (filteredShows.length) {
    givenShows = filteredShows
  } else if (filteredShowsbyDay.length) {
    givenShows = filteredShowsbyDay
  } else if (filteredShowsbyGenre.length) {
    givenShows = filteredShowsbyGenre
  }
  const showNodes = givenShows.map(show => (
    <Show
    key={show._id}
    show={show}
    onShowAdded={onShowAdded}></Show>
  ));

  return (
    <div id="show-list">
    {showNodes}
    </div>
  )
}

export default ShowList;
