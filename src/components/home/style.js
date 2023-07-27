import { styled } from "styled-components";
const Container = styled.div`
  background-color: #111111;
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  background-color: #111111;
  width: 25%;
  color: #fff;
`;
const RightSide = styled.div`
  background-color: #000;
  width: 75%;
  color: #fff;
`;
export { Container, LeftSide, RightSide };
