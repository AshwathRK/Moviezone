import React, { useState } from 'react'

export default function TopListMovies() {

    const [topMoives, setTopMovies] = useState();



    return (
        <>
            <div className='px-10 TopListMovies'>
                <h3 className='poppins-semibold TitleofMovielist'>Top 10 Most Searched Movies on MovieZone This Week</h3>
                <div className='container'>
                    <div className='moiveList'>
                        <div>
                            <img className='movieposter' src="public/Top 10/Adolescence.avif"/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
