import styled, { css } from "styled-components";
const center = css`
  margin-left: 50%;
  transform: translateX(-50%);
`;
const DetailDiv = styled.div`
  width: 100%;
  height: auto;
`;
const Img = styled.img`
  width: 400px;
  height: 550px;
  margin-top: 10%;
  box-shadow: ${(props) => props.theme.boxShadow};
  ${center}
`;
const Dl = styled.dl`
  width: 800px;
  height: auto;
  margin: 50px 0;
  ${center}

  dt {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  dd {
    width: 300px;
    height: auto;
    ${center}
    background-color: blanchedalmond;
    margin-bottom: 40px;
  }
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 40px;
  }
  ul {
    ${center}
    li {
      width
    }
  }
`;
function MovieDetail({ img, title, year, lang, rating, summary, gen }) {
  return (
    <DetailDiv>
      <Img src={img} />
      <Dl>
        <dt>{title}</dt>
        <dd>
          <span>{year}</span>
          <span>{lang}</span>
          <span>{rating}</span>
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
export default MovieDetail;
