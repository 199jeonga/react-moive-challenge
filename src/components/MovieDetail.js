import styled from "styled-components";
function MovieDetail({ img, title, year, lang, rating, summary, gen, bgImg }) {
  return (
    <DetailDiv>
      <Img src={img} />
      <Dl>
        <Dt>
          <span>{title}</span>
        </Dt>
        <Dd>
          <span>{year}</span>
          <span>{lang}</span>
          <span>⭐️ : {rating}</span>
        </Dd>
        <p>{summary}</p>
        <Ul>
          {gen.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </Ul>
      </Dl>
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  width: 100%;
  height: auto;
  padding-top: 420px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 110%;
  }
`;
const Img = styled.img`
  position: absolute;
  top: -150px;
  width: auto;
  height: 550px;
  ${(props) => props.theme.box};
  ${(props) => props.theme.center};
  @media ${(props) => props.theme.mobile} {
    top: -50px;
    width: 80%;
    height: auto;
  }
`;
const Dl = styled.dl`
  width: 90%;
  height: auto;
  margin: 50px 0;
  ${(props) => props.theme.center};
  p {
    font-size: 18px;
    line-height: 26px;
    margin: 60px 0;
    color: ${(props) => props.theme.color_white};
  }
`;
const Dt = styled.dt`
  font-size: 30px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color_yellow};
  word-break: break-all;
  span {
    font-family: "LeferiPoint-BlackA";
  }
`;
const Dd = styled.dd`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: auto;
  ${(props) => props.theme.center};
  span {
    width: 80px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    ${(props) => props.theme.box}
    background-color: ${(props) => props.theme.color_yellow};
    color: ${(props) => props.theme.color_navy};
  }
`;
const Ul = styled.ul`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  ${(props) => props.theme.center};
  margin-bottom: 140px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    flex-wrap: wrap;
  }
  li {
    width: auto;
    height: auto;
    span {
      font-family: "LeferiPoint-BlackA";
      color: ${(props) => props.theme.color_white};
      text-align: center;
    }
  }
`;

export default MovieDetail;
