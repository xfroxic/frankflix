import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { getDatabase, ref, onValue } from 'firebase/database'

export default function Row(props) {
  const [movies, setMovies] = useState([])
  const { title, movieType } = props;
  const leafRoot = 'movies';

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const getdb = getDatabase();
    const movieRef = ref(getdb, `${leafRoot}/${movieType}`);
    onValue(movieRef, (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);  // this updates 'movies' state by calling 'setMovies' function
      };
    });
  }
  
  return (   
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img 
            className="row_poster row_posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}