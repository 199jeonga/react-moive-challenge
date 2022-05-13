import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeLoading from "../components/HomeLoading";
function Home() {
  return (
    <HomeDiv>
      <HomeLoading />
      <Linkto to="/movie">무비홈으로 가기!</Linkto>
    </HomeDiv>
  );
}
const HomeDiv = styled.div`
  width: 100%;
  height: auto;
  padding-top: 300px;
`;
const Linkto = styled(Link)`
  display: block;
  width: 300px;
  height: 40px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  margin-top: 100px;
  background-color: ${(props) => props.theme.color_navy};
  color: ${(props) => props.theme.color_yellow};
  font-weight: 700;
  ${(props) => props.theme.center};
  ${(props) => props.theme.box};
  &:hover {
    transition: all 200ms ease;
    background-color: ${(props) => props.theme.color_yellow};
    color: ${(props) => props.theme.color_navy};
  }
`;
export default Home;
