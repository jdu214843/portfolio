import { styled } from "styled-components";
const Container = styled.div``;

const Wrapper = styled.div`
  min-width: 1440px;
  display: flex;
  height: 100%;
`;
const LeftSide = styled.div`
  background-color: #1a1a1a;
  width: 25rem;
  position: fixed;
  color: #fff;
  display: block;
  height: 100%;
`;
const MyImg = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid red;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  margin-left: 400px;
  min-height: 100vh;
  background-color: black;
  width: 100%;
`;

const Navbar = styled.div`
  margin-top: 20px;
`;
const Title = styled.div``;

const About = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 400px;
`;

export { Container, LeftSide, RightSide, MyImg, Wrapper, Title, Navbar, About };
