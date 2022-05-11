import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import MovieSuggest from "../components/MovieSuggest";
function Movie() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const { id } = useParams();
  const movieInfoResponse = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  };
  const suggestResponse = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    ).json();
    setSuggest(json.data.movies);
    console.log(json.data.movies);
  };
  useEffect(() => {
    movieInfoResponse();
    suggestResponse();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Movie!!!!!!!! Detail@@@ loading~!~!!!!!</div>
      ) : (
        <div>
          <MovieDetail
            img={movieInfo.large_cover_image}
            title={movieInfo.title}
            year={movieInfo.year}
            lang={movieInfo.language}
            rating={movieInfo.rating}
            summary={movieInfo.description_full}
            gen={movieInfo.genres}
            bgImg={movieInfo.background_image}
          />
          {suggest.map((item, index) => (
            <MovieSuggest
              key={index}
              url={suggest.url}
              title={suggest.title}
              img={suggest.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie;
