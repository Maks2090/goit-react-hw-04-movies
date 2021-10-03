import {useState, useEffect } from 'react';
import {fetchReviews} from '../../Api/fetchmovies'

function Reviews({ movieId }){
    const [reviews, setRevievs] = useState([]);

    useEffect(() =>{
        fetchReviews(movieId).then((r) =>{
            setRevievs(r.data.results)
        })
    }, [movieId]);

    return(
        <>
            {reviews.length > 0 ? (
                <ul>
                {reviews.map((review) => {
                    return (
                    <li key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p>{review.content}</p>
                    </li>
                    );
                })}
                </ul>
            ) : (
                 <p>We don`t have any reviews for this movie.</p>
             )}
        </>
    )
}

export default Reviews;