import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const old_Movies = 'Old movies first';
const new_Movies = 'New movies first';

const all_Movies = 'All';
const Movies = 'movie';
const web_Series = 'series';
const others = 'other';

export default function MovieList() {
    const searchedMovies = useSelector((state) => state.movieSearchData);
    const [sortByYear, setSortByYear] = useState(new_Movies);
    const [sortByMovieType, setSortByMovieType] = useState(all_Movies);
    const [clickedIndexes, setClickedIndexes] = useState(new Set());
    const [displayMovies, setDisplayMovies] = useState([]);

    const [watchListMovies, setWatchListMovies] = useState([])

    //Store the selected watchlist movies in localstorage
    
    localStorage.setItem('watchListMovies', JSON.stringify(watchListMovies));



    // To reset the selected watchlist buttons
    useEffect(() => {
        setClickedIndexes(new Set())
    }, [searchedMovies])


    useEffect(() => {
        if (!Array.isArray(searchedMovies) || searchedMovies.length === 0) {

            setDisplayMovies([]);
            return;
        }

        let filtered = [...searchedMovies];

        // Filter by type
        if (sortByMovieType !== all_Movies) {
            filtered = filtered.filter(movie => {
                if (sortByMovieType === others) {
                    return movie.Type !== Movies && movie.Type !== web_Series;
                }
                return movie.Type === sortByMovieType;
            });
        }

        // Sort by year
        filtered.sort((a, b) => {
            const yearA = parseInt(a.Year);
            const yearB = parseInt(b.Year);
            return sortByYear === old_Movies ? yearA - yearB : yearB - yearA;
        });

        setDisplayMovies(filtered);

    }, [searchedMovies, sortByYear, sortByMovieType]);

    const toggleWatchlist = (index, value) => {
        setClickedIndexes((prev) => {
            const newSet = new Set(prev);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            setWatchListMovies((prev) => [...prev, value]);
            return newSet;
        });
    };

    // console.log(watchListMovies)

    return (
        <div className='px-5 gap-y-10 searchMoiveList'>
            <div className='w-full h-30 flex items-center justify-end'>

                {/* Filter by type */}
                <div className={`dropdown mx-2 ${searchedMovies.length > 0 ? 'flex' : 'hidden'}`}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        {sortByMovieType}
                    </button>
                    <ul className="dropdown-menu">
                        {[all_Movies, Movies, web_Series, others].map((type, i) => (
                            <li key={i} onClick={() => setSortByMovieType(type)}>
                                <a className="dropdown-item">{type}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sort by year */}
                <div className={`dropdown ${searchedMovies.length > 0 ? 'flex' : 'hidden'}`}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        {sortByYear}
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => setSortByYear(old_Movies)}><a className="dropdown-item">Old movies first</a></li>
                        <li onClick={() => setSortByYear(new_Movies)}><a className="dropdown-item">New movies first</a></li>
                    </ul>
                </div>
            </div>

            {/* Movie Cards */}
            <div className='gap-3 grid moiveListPage w-full'>
                {
                    displayMovies.length > 0 ? (
                        displayMovies.map((value, index) => (
                            <div key={index} className='w-full relative border moiveCardInPage rounded-xl h-80'>
                                <button
                                    onClick={() => toggleWatchlist(index, value)}
                                    className={`absolute ${clickedIndexes.has(index) ? 'watchLiskafterclickbtn' : 'watchLiskbeforeclickbtn'} w-9 h-9 flex items-center justify-center`}
                                >
                                    <img
                                        src={clickedIndexes.has(index) ? "/watchlist-dark.png" : "/watchlist-white.png"}
                                        className='w-5 h-5 watchlistbtn'
                                    />
                                </button>
                                <img
                                    className='w-full h-4/5 object-fill rounded-t-xl'
                                    src={value.Poster !== "N/A" ? value.Poster : "public/no-poster-available.jpg"}
                                    alt={value.Title}
                                />
                                <div className='h-1/5 flex items-center justify-center w-full'>
                                    <h6 className='px-2 text-center poppins-semibold text-white'>{value.Title}</h6>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>No Data Found</h1>
                    )
                }
            </div>
        </div>
    );
}
