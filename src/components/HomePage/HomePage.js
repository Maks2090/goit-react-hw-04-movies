import {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {trendingMovies} from '../../Api/fetchmovies'
import css from '../HomePage/HomePage.module.css'

function HomePage(){
    
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        trendingMovies().then((r) =>{
            setMovies(r.data.results)
        })
    }, [])

    return (
        <>
            <h1 className={css.title}>Trending Today</h1>
            <ul>
                {movies.map((movie) =>(
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage;