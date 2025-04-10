import React, { useEffect, useState } from 'react'

export default function WatchList() {

    const [SelectedProducts, setSelectedProducts] = useState([]);

    const storedObjectString = localStorage.getItem('watchListMovies');
    useEffect(() => {
        const storedObject = JSON.parse(storedObjectString || '[]');
        setSelectedProducts(storedObject);
        console.log(storedObject)
    }, [storedObjectString]);


    // Remove item by title
    const removeFromWatchlist = (title) => {
        const updated = SelectedProducts.filter(m => m.Title !== title);
        setSelectedProducts(updated);
        localStorage.setItem('selectedProducts', JSON.stringify(updated));
    };

    return (
        <div className='sm:p-5 h-screen movieWatchlistPage'>
            <h2 className='p-3 poppins-bold watchListTitle'>My Watchlist</h2>
            {SelectedProducts.length > 0 ? (
                <div className='movieWatchlistContainer gap-3 w-full p-3 flex'>
                    {SelectedProducts.map((movie, index) => (
                        <div key={index} className='relative cardOfWatchlist flex justify-center w-55'>
                            <img
                                className='w-full h-80 object-fill rounded-xl'
                                src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster-available.jpg"}
                                alt={movie.Title || 'Movie Poster'}
                            />
                            <button
                                onClick={() => removeFromWatchlist(movie.Title)}
                                className="mt-2 removeBtn btn-primary text-red-500 absolute"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No movies in watchlist.</p>
            )}
        </div>
    );
}
