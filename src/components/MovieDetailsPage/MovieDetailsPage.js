import {useParams, Route, Link ,useRouteMatch, Switch, useLocation, useHistory} from 'react-router-dom';
import {useState, useEffect, lazy, Suspense } from 'react';
import {fetchMovieId} from '../../Api/fetchmovies';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';

const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "Reviews-view" */));
const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast-view" */));

function MovieDetailsPage (){
    const {movieId} = useParams()
    const {url, path} = useRouteMatch()
    const location = useLocation();
    const history = useHistory();
    const [movie, setMovie] = useState([])


    useEffect(() =>{
        fetchMovieId(movieId).then((r) =>{
            setMovie(r.data)
        })
    }, [movieId])

    const imgUrl = 'https://image.tmdb.org/t/p/w500/';

    const imgNotFound =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

    const onGoBackClick = () => {
        history.push(location.state?.from ? location.state.from : "/")
      };

    const genresNormalize = (genres) => {
        return genres
          .map((genre) => {
            return genre.name;
          })
          .join(", ");
      };

    return (
        <>
       
        {movie && (
            <div className={css.box}>
             
            <button className={css.button} type="button" onClick={onGoBackClick}>
               Go Back
            </button>
                <div className={css.moviePage}>
                <div className={css.imgBox}>
                 <img className={css.img} src= {movie.poster_path ? `${imgUrl}${movie.poster_path}` : imgNotFound} alt={movie.title} />
                </div>
                
                <div>
                    <h1>{movie.title}</h1>
                    <p>User Score: {movie.vote_average} </p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    {movie.genres && (
                        <>
                        <h3>Genres</h3>
                        <p>{genresNormalize(movie.genres)}</p>
                        </>
                    )}
                </div>
                </div>
                <div>
                    <h4>Additional informatiom</h4>
                    <Link className={css.link}  to={{pathname:`${url}/cast`,  state: { from: location?.state?.from }} } >Cast</Link>
                    <Link className={css.link}  to={{pathname:`${url}/reviews`, state: { from: location?.state?.from }}}>Reviews</Link>
                </div>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route path={`${path}/cast`}>
                            <Cast movieId={movieId} baseImg={imgUrl} noImg={imgNotFound}/>
                        </Route>

                        <Route path={`${path}/reviews`}>
                        <Reviews movieId={movieId} />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        )}
        
        </>
    )
}

export default MovieDetailsPage;