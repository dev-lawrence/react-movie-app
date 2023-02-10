import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </>
  );
};

export default MovieList;
