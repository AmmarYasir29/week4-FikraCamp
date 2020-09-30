import { useEffect, useState } from "react";
import Header from "./Header";
import Movie from "./Movie";
export default function Home() {
  // const apiKey = "b8b7c10c913c0bf66d8207a641c23531";
  const [topRate, setTopRate] = useState([]);
  const [popularData, setpopularData] = useState([]);
  const [upcome, setUpcome] = useState([]);
  const topRateFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopRate(data.results));
  };
  const popularFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setpopularData(data.results));
  };
  const upcomeFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setUpcome(data.results));
  };
  useEffect(() => topRateFetch(), []);
  useEffect(() => popularFetch(), []);
  useEffect(() => upcomeFetch(), []);
  return (
    <>
      <Header />
      <main>
        <div className="cover">
          {/* src={ "https://image.tmdb.org/t/p/original/8g1rUabKleLvovt0Sx6bXgWfC42.jpg"} */}
          <img src="../public/Mask.png" alt="imgCover" />
          <div className="overView">
            <h2>Lorem, ipsum.</h2>
          </div>
        </div>
        <div className="container">
          <p className="titleHeader">Top Rate</p>
          <div className="row">
            {topRate.map((item) => (
              <Movie key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="container">
          <p className="titleHeader">Most popular</p>
          <div className="row">
            {popularData.map((item) => (
              <Movie key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="container">
          <p className="titleHeader">Up Coming</p>
          <div className="row">
            {upcome.map((item) => (
              <Movie key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
