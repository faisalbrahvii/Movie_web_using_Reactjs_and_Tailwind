import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Logo from '../assests/netflix.png';
import Logo2 from '../assests/gbb.png';

const Search_movie = () => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        const randomPage = Math.floor(Math.random() * 1000) + 1;

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`)
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    };

    const show_input = () => {  
        setInputVisible(!isInputVisible);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const filteredMovies = movieList.filter(movie =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <>
            <div className='flex justify-between items-center h-24 w-full mx-auto px-4 bg-transparent text-white'>
                <div>
                    <img src={Logo} alt="" className=" h-32 relative left-12 hero" />
                </div>
                <ul className='hidden  md:flex gap-16 items-center text-gray-200 text-[16px] hero'>
                    <li className='text-white p-4'>Home</li>
                    <li className='p-4'>Movies</li>
                    <li className='p-4'>Series</li>
                    <li className='flex items-center gap-1'>My list <FaAngleDown /></li>
                    <div className='flex items-center gap-2'>
                        {isInputVisible && (
                            <li>
                                <input type="text" placeholder='Search' className='px-4 py-1 rounded text-black' value={inputValue} onChange={handleInputChange} />
                            </li>
                        )}
                        <button type='button' onClick={show_input}>
                            <FaSearch size={21} className='text-white' />
                        </button>
                    </div>
                    <li><IoIosNotifications size={23} className='text-white' /></li>
                    <li><img src={Logo2} alt="" className="h-12 text-white " /></li>
                </ul>
            </div>
            <div className='h-24 w-full mob hidden   text-white'>
                <center>
                    <img src={Logo} alt="" className=" h-32 relative " />
                </center>
            </div>
            <div>
                <div className='w-full h-[500px] bg-black '>
                    <div className='grid grid-cols-5 gap-5 p-8'>
                        {filteredMovies.map((movie, index) => (
                            <div key={index} className="w-[70%]">
                                <div>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt=""
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search_movie;
