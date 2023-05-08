import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { formatDate, formatRating, formatTitle, formatOverview } from '../globals/formatters';
import { getStorage } from "../utilities/localStorageUtils";
import AddToWatch from './AddToWatch';

function MovieCard({ movieObj }) {

  //addedMovies is needed to keep track of what movies are added to the watchlist
  const addedMovies = getStorage("watchlistMovies");

  const formatPosterOverview = formatOverview(movieObj.overview, 80);

  return (
    <div className='movie-card'>
        <div className='poster'>
            {movieObj.poster_path === null ?
                // true
                <img src={noPoster} alt={`No poster available for ${movieObj.title}`} /> :
                // false
                <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
            }
        </div>

        <div className='info'>
            <h2>{formatTitle(movieObj.title)}</h2>
            <AddToWatch movie={movieObj} addedMovies={addedMovies}/>
            <p className='rating'>{formatRating(movieObj.vote_average)}</p>
            <p className='date'>{formatDate(movieObj.release_date)}</p>
            <p>{formatPosterOverview}</p>
            <Link className="button-link" to={`/movie/${movieObj.id}`}>More Info</Link>
        </div>

    </div>
  )
}

export default MovieCard