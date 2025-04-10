import React, { useState } from 'react';

export default function HeroSection() {

    const [moiveList, setMovieList] = useState([
        {
            'id': '1',
            'Title': 'Dune',
            'path': '/Moive posters/Dune.jpg',
            'details': 'Dune (titled on-screen as Dune: Part One) is a 2021 American epic space opera film directed and co-produced by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts, and Eric Roth. It is the first of a two-part adaptation of the 1965 novel by Frank Herbert'
        },
        {
            'id': '2',
            'Title': 'Avathar',
            'path': '/Moive posters/Avathar.jpg',
            'details': 'Avatar 2" redirects here. For the second season of Avatar: The Last Airbender, see Avatar: The Last Airbender season 2.'
        },
        {
            'id': '3',
            'Title': 'Doctor Strange',
            'path': '/Moive posters/DoctorStrange.jpg',
            'details': 'Stephen Strange" redirects here. For the Welsh pop singer, see Steve Strange. For the American evangelical author, see Stephen Strang'
        },
        {
            'id': '4',
            'Title': '007',
            'path': '/Moive posters/007.jpg',
            'details': 'James Bond in film" redirects here. For the various portrayals of the character in film, see Portrayal of James Bond in film.'
        },
        {
            'id': '5',
            'Title': 'John Wick',
            'path': '/Moive posters/JohnWick.jpg',
            'details': 'This article is about the media franchise. For the first film in the franchise, see John Wick (film). For the titular character, see John Wick (character). For other uses, see John Wick (disambiguation).'
        },
        {
            'id': '6',
            'Title': 'Pacific Rim',
            'path': '/Moive posters/PacificRim.jpg',
            'details': 'Pacific Rim is a 2013 American science fiction monster film directed by Guillermo del Toro.'
        },
        {
            'id': '7',
            'Title': 'Rough One',
            'path': '/Moive posters/RoughOne.jpg',
            'details': 'This article is about the 2001 motion picture. For the Parisian cabaret, see Moulin Rouge. For the Broadway musical, see Moulin Rouge! (musical). For other uses, see Moulin Rouge (disambiguation)'
        },
        {
            'id': '8',
            'Title': 'Star War',
            'path': '/Moive posters/StarWar.jpg',
            'details': 'This article is about the original 1977 film. For other films in the franchise, see List of Star Wars films. "A New Hope" redirects here. For other uses, see A New Hope (disambiguation).'
        }
    ])

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {moiveList.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {moiveList.map((value, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={value.id}>
                            <img src={value.path} className="d-block w-100 movieImge" alt={value.Title} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{value.Title}</h5>
                                <p>{value.details}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

