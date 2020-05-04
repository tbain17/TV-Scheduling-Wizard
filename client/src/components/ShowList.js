import React from 'react';

const ShowList = ({ shows, onShowDelete }) => {
  const showNodes = ShowList.map(show => (
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
