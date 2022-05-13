import styled, { keyframes } from "styled-components";

function HomeLoading() {
  return <Span>We recommend the best movies to you!</Span>;
}
const translate = keyframes`
  0%{
    opacity: 0;
  }
  50%{
  opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
const Span = styled.span`
  display: block;
  width: 100%;
  height: auto;
  font-size: 40px;
  font-family: "SDSamliphopangche_Outline";
  color: ${(props) => props.theme.color_navy};
  text-align: center;
  animation: ${translate} 3500ms 1s infinite;
`;
export default HomeLoading;
