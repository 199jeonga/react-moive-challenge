import { useState, useEffect } from "react";
import HomeDetail from "../components/HomeDetail.js";
function Home() {
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
        <div>loading....!</div>
      ) : (
        <div>
          <h1>movie list</h1>
          <div>
            {movieData.map((item) => (
              <HomeDetail
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
export default Home;
