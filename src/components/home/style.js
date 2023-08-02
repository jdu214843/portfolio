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
  width: 50px;
  height: 50px;
  border: 1px solid red;
`;
const RightSide = styled.div`
  background-color: #000;
  width: 75%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 7rem;
`;

const Navbar = styled.div`
  margin-top: 20px;
`;

export { Container, LeftSide, RightSide, MyImg, Wrapper, Navbar };
