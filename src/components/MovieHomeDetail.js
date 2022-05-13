import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieHomeDetail({ id, title, language, summary, img, bgImg }) {
  return (
    <Card>
      <Link to={`/movie/${id}`}>
        <Img src={img} alt={title} />
      </Link>
      <Ul>
        <li>{title}</li>
        <li>{language}</li>
        <li>{summary.length > 330 ? summary.slice(0, 330) : summary}...</li>
      </Ul>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 45%;
  height: 220px;
  background-color: ${(props) => props.theme.color_navy};
  padding: 40px 20px;
  margin: 30px 0;
  ${(props) => props.theme.box}
`;
const Img = styled.img`
  position: absolute;
  top: -20px;
  float: left;
  width: 150px;
  height: 250px;
  ${(props) => props.theme.box}
  &:hover, &:focus {
    ${(props) => props.theme.event}
  }
`;
const Ul = styled.ul`
  float: right;
  width: 310px;
  height: auto;
  li:nth-child(1) {
    font-size: 24px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color_yellow};
  }
  li:nth-child(2) {
    width: 60px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color_yellow};
    color: ${(props) => props.theme.color_navy};
    margin-bottom: 10px;
  }
  li:nth-child(3) {
    font-size: 16px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color_white};
  }
`;
export default MovieHomeDetail;
