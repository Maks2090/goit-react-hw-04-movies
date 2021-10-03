import css from '../MoviesPage/MoviesPage.module.css'
import {fetchSearchMovie} from '../../Api/fetchmovies'
import { useRouteMatch, useLocation, useHistory, Link  } from "react-router-dom";
import { useState, useEffect } from "react";


function MoviesPage (){
    const location = useLocation();
    const [searchFilms, setSearchFilms] = useState([]);
    const [nameFilm, setNameFilm] = useState("");
    const history = useHistory();
    const { url } = useRouteMatch();
   

    const handleChange = (e) => {
        setNameFilm(e.target.value);
      };

      const sortOrder = new URLSearchParams(location.search).get("query");

     const handleSubmitFilm = (e) => {
        e.preventDefault();

        if (!nameFilm) {
         return; }

         history.push({
            ...location,
            search: `query=${nameFilm}`,
          });

    };

    useEffect(() => {
        if (!location.search) {
          return;
        }
    
        fetchSearchMovie(sortOrder)
          .then((r) => {
            setSearchFilms(r.data.results);
          })
          .catch((error) => console.log(error));
      }, [location.search, sortOrder]);

    return(
        <>
            <form className={css.SearchForm}  onSubmit={handleSubmitFilm}>

                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.buttonLabel}>Search</span>
                </button>

                <input
                    value={nameFilm}
                    onChange={handleChange}
                    className={css.input}
                    type="text"
                    
                    autoFocus
                    placeholder="Search movies"
                />
            </form>
            <ul>
        {searchFilms.map((film) => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `${url}/${film.id}`,
                state: { from: `${url}${history.location.search}` },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
        </>
    )
}

export default MoviesPage