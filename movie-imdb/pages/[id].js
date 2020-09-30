import nameOfun from "../store/movie-info";

const Details = () => {
  const { movies } = nameOfun;
  // must consele the info about movie -for test save just id
  {
    console.log(movies);
  }

  return (
    <div>
      {/* use info movie to display on screen */}
      <div className="cover">
        <img
          src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
        />
      </div>
      <div className="container">
        <p>{movies.overview}</p>
      </div>
    </div>
  );
};
export default Details;
