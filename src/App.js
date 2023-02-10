import { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import SearchIcon from './search.svg';
const API_URL = 'http://omdbapi.com?apikey=af7d6a5c';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchItem(search);
  };

  // Find Movies
  const findMovies = () => {
    searchMovies(searchItem);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchItem}
          onChange={handleSearch}
        />

        <img src={SearchIcon} alt="search" onClick={findMovies} />
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
