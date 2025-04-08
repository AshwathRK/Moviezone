import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { addMovies } from '../slices/APIMoiveSlices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const APITokenKey = 'cb6526ab'
export default function NavBar() {

    const [searchEvent, setSearchEvent] = useState('')
    const [searchValue, setSearchValue] = useState('');
    const [searchBy, setSearchBy] = useState("hiddensearchBar");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=${APITokenKey}&s=${searchValue}`)
            .then(function (response) {
                response.data.Search ? dispatch(addMovies(response.data.Search)) : console.log("No value found");
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [searchValue]);

    const getValuefromInput = () => {
        setLoading(true);
        setTimeout(() => {
            setSearchValue(searchEvent)
            navigate("/movielist");
            setLoading(false);
        }, 500);
    }
    const SearchDisplay = () => {
        setSearchBy(searchBy === "hiddensearchBar" ? "shownsearchBar" : "hiddensearchBar");
    };
    return (
        <nav className='grid relative navbarColorGradiant lg:grid-cols-12 lg:grid-rows-1 lg:px-5 md:px-3 h-16' data-bs-theme="dark">
            <a className='col-span-2 flex items-center justify-center' href="#"><img className='box-border w-20 h-12' src="logo_full_white.png" alt="main logo" /></a>
            <div className='col-span-6 col-start-3 flex items-center'>
                <div className='searchBar w-full bg-white h-2/3 rounded-sm grid grid-cols-12 grid-rows-1 '>
                    <input value={searchEvent} onChange={(e) => { setSearchEvent(e.target.value) }} className='dropdown col-span-10 shrink col-start-1 outline-none poppins-semibold px-3' placeholder='Looking for a great movie? Discover it on MovieZone!' />

                    <button
                        onClick={() => {
                            getValuefromInput();
                        }}
                        className="btnSearch flex flex-none justify-around flex col-span-2 col-start-11 text-white items-center poppins-semibold"
                    >
                        {loading ? (
                            <div className="none spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <span className="flex justify-center items-center">
                                <img src="search_icon.png" className="h-4 mx-2 searchicon" />
                                Search
                            </span>
                        )}
                    </button>
                </div>
            </div>
            <div className=' containerbtn col-span-4 col-start-3 col-start-9 flex items-center justify-center'>
                        
                <button onClick={()=>{navigate("/");}} className='text-white poppins-semibold btn-watchlist h-10 px-3 flex items-center'> <img src="./home.png" className='mx-2 watchlist w-4' /><span className='watchList'>Home</span></button>
                <button onClick={()=>{navigate("/movielist");}}  className='text-white poppins-semibold btn-watchlist h-10 px-3 flex items-center'> <img src="./list.png" className='mx-2 watchlist w-4' /><span className='watchList'>Movie List</span></button>
                <button onClick={SearchDisplay} className='searchbtn sm:hidden poppins-semibold flex items-center justify-around px-2'><img src="search_icon.png" className='w-auto h-4 searchicon' /></button>
                <button onClick={()=>{navigate("/watchlist");}} className='text-white poppins-semibold btn-watchlist h-10 px-3 flex items-center'> <img src="./watchlist-dark.png" className='mx-2 watchlist w-5' /><span className='watchList'>Watchlist</span></button>
            </div>

            <div className={`${searchBy} sm:hidden absolute w-full bg-white h-2/3 grid grid-cols-12 grid-rows-1`}>
                <input className='dropdown col-span-8 col-start-1 outline-none poppins-requler px-3' placeholder='Looking for a great movie? Discover it on MovieZone!' />
                <button className='btnSearch flex flex-none justify-around col-span-2 col-start-9 text-white items-center poppins-semibold'><img src="search_icon.png" className='h-4 searchicon' />Search</button>
                <button onClick={SearchDisplay} className='btncancel flex flex-none bg-gray-600 justify-around col-span-2 col-start-11 text-white items-center poppins-semibold'>X cancel</button>
            </div>
        </nav>
    )
}
