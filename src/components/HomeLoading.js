import styled, { keyframes } from "styled-components";
function HomeLoading() {
  return <Span>We recommend the best movies to you!</Span>;
}
const Span = styled.span`
  display: block;
  width: 100%;
  height: auto;
  font-size: 40px;
  font-family: "SDSamliphopangche_Outline";
  color: ${(props) => props.theme.color_navy};
  background-color: #fff;
  text-align: center;
  animation: ${translate} 500ms linear infinite;
`;
const translate = keyframes`
  from{
    display: none;
  }
  to{
    display: block;
  }
`;
export default HomeLoading;
