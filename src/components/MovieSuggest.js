import styled from "styled-components";
function MovieSuggest({ url, title, img }) {
  return (
    <MovieSugDiv>
      <a href={url}>
        <Img src={img} />
      </a>
      <Title>{title}</Title>
    </MovieSugDiv>
  );
}
const MovieSugDiv = styled.li`
  width: 20%;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 40px;
  ${(props) => props.theme.box}
  &:hover,
  &:focus {
    ${(props) => props.theme.event}
  }
`;
const Title = styled.em`
  display: block;
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.color_white};
`;
export default MovieSuggest;
