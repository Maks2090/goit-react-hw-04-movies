import {fetchCastMovieId} from '../../Api/fetchmovies'
import {useState, useEffect } from 'react';
import css from '../Cast/Cast.module.css'

function Cast ({ movieId, baseImg, noImg }){
    const [cast, setCast] = useState(null)

    useEffect(() =>{
        fetchCastMovieId(movieId).then((r) =>{
            setCast(r.data.cast)
        })
    }, [movieId]);

    return(
        <>
            {cast && (
                <ul>
                    {cast.map((e) => {
                        return(
                            
                             <li key={e.id}>
                                <img src={
                                    e.profile_path
                                    ? `${baseImg}${e.profile_path}`
                                    : `${noImg}`
                                     }
                                    alt={e.name} 
                                    className={css.img}
                                    > 
                                   
                                </img>
                            
                                <p>{e.name}</p>
                             </li>
                            
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default Cast