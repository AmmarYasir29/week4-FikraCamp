import Link from "next/link";
import nameOfun from "../store/movie-info";
import About from "./[id]";

const Movie = (props) => {
  const { movies, setMovies } = nameOfun;
  return (
    <Link href={`${props.item.id}`}>
      {/* on click must save data for movie that clicked on zusta manage state -named movies-*/}
      <div className="col" onClick={() => setMovies(props.item.id)}>
        <img
          className="cardImg"
          src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`}
        />
        <span>
          {props.item.original_title.length > 8
            ? props.item.original_title.substr(0, 8) + "...."
            : props.item.original_title}
        </span>
      </div>
    </Link>
  );
};
export default Movie;
