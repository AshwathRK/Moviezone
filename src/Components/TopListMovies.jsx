import React, { useState } from 'react'

export default function TopListMovies() {

    const [topMovies, setTopMovies] = useState([
        {
            'id': '1',
            'Title': 'Adolescence',
            'path': './Top 10/Adolescence.avif',
            'rate': '8.3'
        },
        {
            'id': '2',
            'Title': 'Damsel',
            'path': './Top 10/Damsel.jpg',
            'rate': '8.3'
        },
        {
            'id': '3',
            'Title': 'Dardevil',
            'path': './Top 10/Dardevil.jpg',
            'rate': '8.3'
        },
        {
            'id': '4',
            'Title': 'Reachers',
            'path': './Top 10/Reachers.webp',
            'rate': '8.3'
        },
        {
            'id': '5',
            'Title': 'Severance',
            'path': './Top 10/Severance.webp',
            'rate': '8.3'
        },
        {
            'id': '6',
            'Title': 'Show White',
            'path': './Top 10/Snow White.jpeg',
            'rate': '8.3'
        },
        {
            'id': '7',
            'Title': 'Solo Leaveling',
            'path': './Top 10/SoloLeveling.jpg',
            'rate': '8.3'
        },
        {
            'id': '8',
            'Title': 'The pitt',
            'path': './Top 10/The pitt.jpg',
            'rate': '8.3'
        },
        {
            'id': '9',
            'Title': 'The Residance',
            'path': './Top 10/The Residance.jpg',
            'rate': '8.3'
        },
        {
            'id': '10',
            'Title': 'The white lotus',
            'path': './Top 10/The white lotus.jpg',
            'rate': '8.3'
        }
    ]
    );


    return (
        <>
            <div className='TopListMovies flex flex-col justify-around '>
                <h3 className='poppins-bold TitleofMovielist flex items-center'>Top 10 Most Searched Movies on MovieZone This Week</h3>
                <div className='topMoviesonlist w-full m-0 b-0 p-0 flex'>
                    <div className='movieList w-full gap-x-4 flex overflow-hidden overflow-x-auto'>

                        {/* Card */}
                        {
                            topMovies.map((value) => (
                                <div key={value.id} className="moviecard w-60 rounded-md border">
                                    <img src={value.path} className="w-100 h-70 rounded-t-md" />
                                    <div className="cardBody h-30 flex flex-col justify-around items-center">
                                        <div className='w-100'>
                                            <div className='flex items-center justify-between px-4'>
                                                <h5 className="cardtitle poppins-reguler text-white w-30 m-0">{value.Title}</h5>
                                                <div className='flex items-center w-10'>
                                                    <img src="./star.png" className='w-4 h-4 mx-1' />
                                                    <h6 className='m-0 text-white'>{value.rate}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn bg-gray-400 mx-4 w-30 btn-searchere text-white border">Search here</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
