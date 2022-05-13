import styled from "styled-components";
import Button from "../components/Button";
import HomeLoading from "../components/HomeLoading";
function Home() {
  return (
    <HomeDiv>
      <HomeLoading />
      <Button url="/movie" text="영화추천 받으러 가기 !" />
    </HomeDiv>
  );
}
const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50%;
  @media ${(props) => props.theme.laptop} {
    padding-top: 25%;
  }
`;

export default Home;
