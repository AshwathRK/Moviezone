import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import TopListMovies from './Components/TopListMovies';
import PopulerIntrests from './Components/PopulerIntrests';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Components/MovieList';

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <HeroSection />
                            <TopListMovies />
                            <PopulerIntrests />
                            <Footer />
                        </>
                    }
                />
                <Route path='/movielist' element={<MovieList />} />
            </Routes>
        </>
    );
}
