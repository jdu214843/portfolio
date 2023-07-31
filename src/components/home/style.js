import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
`;
const LeftSide = styled.div`
  background-color: #111111;
  width: 25%;
  color: #fff;
`;
const MyImg = styled.div`
  width: 100px;
  height: 100px;
`;
const RightSide = styled.div`
  background-color: #000;
  width: 75%;
  color: #fff;
`;
export { Container, LeftSide, RightSide, MyImg, Wrapper };
