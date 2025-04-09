import React from 'react'

export default function WatchList() {

  const storedObjectString = localStorage.getItem('watchListMovies');
  const storedObject = JSON.parse(storedObjectString);
  console.log(storedObject);
  return (
    <div>WatchList</div>
  )
}
