import React from 'react'
import { useSelector } from 'react-redux'

export default function MovieList() {

    const searchedMovies = useSelector((selector)=>{
        selector.movieSearchData
    })

    console.log(searchedMovies)

  return (
    <>
       {
        searchedMovies?.map(value=>{
            <p>{value}</p>
        })
       } 
    </>
  )
}
