import { useEffect, useState } from "react";

export default function Home() {
  const apiKey = "b8b7c10c913c0bf66d8207a641c23531";
  const [popularData, setpopularData] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [upcome, setUpcome] = useState([]);
  const popularFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setpopularData(data.results));
  };
  const topRateFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopRate(data.results));
  };
  const upcomeFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b8b7c10c913c0bf66d8207a641c23531&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setUpcome(data.results));
  };
  useEffect(() => popularFetch(), []);
  useEffect(() => topRateFetch(), []);
  useEffect(() => upcomeFetch(), []);
  return (
    <>
      <header>
        <div className="container">
          <div className="flex">
            <span className="text-header">CINE APP</span>
            <input type="text" className="search-btn" value="Find Move..." />
          </div>
        </div>
      </header>
      <main>
        <div className="cover">
          <img
            src={
              "https://image.tmdb.org/t/p/original/8g1rUabKleLvovt0Sx6bXgWfC42.jpg"
            }
            alt="imgCover"
          />
          <div className="overView">
            <h2>list of move</h2>
          </div>
        </div>
        <div className="container">
          <p className="titleHeader">Top Rate</p>topRate
          <div className="row">
            {topRate.map((item) => (
              <div className="col" key={item.id}>
                <img
                  className="cardImg"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
                <span>
                  {item.original_title.length > 30
                    ? item.original_title.substr(0, 30) + "...."
                    : item.original_title}
                </span>
              </div>
            ))}
          </div>
          <p className="titleHeader">Top Popular</p>
          <div className="row">
            {popularData.map((item) => (
              <div className="col" key={item.id}>
                <img
                  className="cardImg"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
                <span>
                  {item.original_title.length > 30
                    ? item.original_title.substr(0, 30) + "...."
                    : item.original_title}
                </span>
              </div>
            ))}
          </div>
          <p className="titleHeader">Up Coming</p>
          <div className="row">
            {upcome.map((item) => (
              <div className="col" key={item.id}>
                <img
                  className="cardImg"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
                <span>
                  {item.original_title.length > 30
                    ? item.original_title.substr(0, 30) + "...."
                    : item.original_title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
