import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import MovieSuggest from "../components/MovieSuggest";
import Loading from "../components/Loading";
import Button from "../components/Button";
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
  };
  useEffect(() => {
    movieInfoResponse();
    suggestResponse();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <MovieDiv
          style={{ backgroundImage: `url( ${movieInfo.background_image} )` }}
        >
          <MovieWrap>
            <MovieDetail
              img={movieInfo.large_cover_image}
              title={movieInfo.title}
              year={movieInfo.year}
              lang={movieInfo.language}
              rating={movieInfo.rating}
              summary={movieInfo.description_full}
              gen={movieInfo.genres}
            />
            <div>
              <h3>비슷한 장르의 영화 추천</h3>
              <MovieSugUl>
                {suggest.map((item, index) => (
                  <MovieSuggest
                    key={index}
                    url={item.url}
                    title={item.title}
                    img={item.medium_cover_image}
                  />
                ))}
              </MovieSugUl>
            </div>
          </MovieWrap>
          <Button
            url={`${process.env.PUBLIC_URL}/movie`}
            text="목록으로 가기"
          />
          <Button url={`${process.env.PUBLIC_URL}/`} text="시작화면으로 가기" />
        </MovieDiv>
      )}
    </div>
  );
}
const MovieDiv = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 25%;
  margin-bottom: 50px;
`;
const MovieWrap = styled.div`
  width: 90%;
  height: auto;
  background-color: ${(props) => props.theme.color_navy};
  ${(props) => props.theme.box};
  ${(props) => props.theme.center};
  padding-bottom: 40px;
  @media ${(props) => props.theme.laptop} {
    width: 80%;
  }
`;
const MovieSugUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
  }
`;
export default Movie;
