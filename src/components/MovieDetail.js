import styled from "styled-components";
function MovieDetail({ img, title, year, lang, rating, summary, gen, bgImg }) {
  return (
    <DetailDiv>
      <Img src={img} />
      <Dl>
        <dt>{title}</dt>
        <dd>
          <span>{year}</span>
          <span>{lang}</span>
          <span>⭐️ : {rating}</span>
        </dd>
        <p>{summary}</p>
        <ul>
          {gen.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Dl>
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  width: 100%;
  height: auto;
  padding-top: 420px;
`;
const Img = styled.img`
  position: absolute;
  top: -150px;
  width: auto;
  height: 550px;
  ${(props) => props.theme.box};
  ${(props) => props.theme.center};
`;
const Dl = styled.dl`
  width: 900px;
  height: auto;
  margin: 50px 0;
  ${(props) => props.theme.center};

  dt {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: ${(props) => props.theme.color_yellow};
  }
  dd {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: auto;
    ${(props) => props.theme.center};
  }
  span {
    width: 80px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    ${(props) => props.theme.box}
    background-color: ${(props) => props.theme.color_yellow};
    color: ${(props) => props.theme.color_navy};
    font-weight: 700;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    margin: 60px 0;
    color: ${(props) => props.theme.color_white};
  }
  ul {
    width: 500px;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    ${(props) => props.theme.center};
    margin-bottom: 140px;

    li {
      width: auto;
      height: auto;
      color: ${(props) => props.theme.color_white};
      text-align: center;
      font-weight: 700;
    }
  }
`;

export default MovieDetail;
