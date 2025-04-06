import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import TopListMovies from './Components/TopListMovies';
import PopulerIntrests from './Components/PopulerIntrests';

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <TopListMovies></TopListMovies>
      <PopulerIntrests></PopulerIntrests>
    </>

  )
}
