import { useState, useEffect } from "react";
import styled from "styled-components";
import MovieHomeDetail from "../components/MovieHomeDetail";
import Loading from "../components/Loading";
import Button from "../components/Button";

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
    <MovieHomeDiv>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MovieDetailDiv>
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
          </MovieDetailDiv>
          <Button url="/" text="시작화면으로 가기" />
        </div>
      )}
    </MovieHomeDiv>
  );
}
const MovieHomeDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
`;
const MovieDetailDiv = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${(props) => props.theme.center}
  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 80%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 90%;
    max-width: 680px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 96%;
    max-width: 1100px;
  }
`;
export default MovieHome;
