import { useState, useEffect } from "react";
import styled from "styled-components";
import MovieHomeDetail from "../components/MovieHomeDetail";
import Loading from "../components/Loading";

function MovieHome() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const response = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?order_by=asc&minimum_rating=5&sort_by=year`
      )
    ).json();
    setMovieData(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };
  useEffect(() => {
    response();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {movieData.map((item) => (
              <MovieHomeDetail
                key={item.id}
                id={item.id}
                title={item.title}
                language={item.language}
                summary={item.summary}
                img={item.medium_cover_image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieHome;
