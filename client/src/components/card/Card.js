import React, { useState ,useEffect } from 'react'
import Skeleton from "react-loading-skeleton";
import './Card.css'
import { Link } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

function Card({movie}) {
   
    const [isLoading ,setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])
    

  return <> {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt='img' />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}


export default Card