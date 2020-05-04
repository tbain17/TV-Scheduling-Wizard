import React from 'react';
import Show from './Show';

const ShowList = ({ shows, onShowDelete }) => {
  const showNodes = shows.map(show => (
    <Show
    key={show._id}
    show={show}
    onShowDelete={onShowDelete}></Show>
  ));

  return (
    <div id="showList">
    {showNodes}
    </div>
  )
}

export default ShowList;
