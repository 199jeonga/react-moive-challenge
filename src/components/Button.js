import { Link } from "react-router-dom";
import styled from "styled-components";

function Button({ url, text }) {
  return (
    <Linkto to={url}>
      <span>{text}</span>
    </Linkto>
  );
}

const Linkto = styled(Link)`
  display: block;
  width: 300px;
  height: 40px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
  background-color: ${(props) => props.theme.color_navy};
  color: ${(props) => props.theme.color_yellow};
  font-weight: 700;
  ${(props) => props.theme.center};
  ${(props) => props.theme.box};
  &:hover,
  &:focus {
    transition: all 200ms ease;
    background-color: ${(props) => props.theme.color_yellow};
    color: ${(props) => props.theme.color_navy};
  }
`;
export default Button;
