import { styled } from "styled-components";
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const LeftSide = styled.div`
  background-color: #1a1a1a;
  width: 22rem;
  position: fixed;
  color: #fff;
  display: block;
  height: 100%;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  margin-left: 352px;

  min-height: 100vh;
  background-color: #111111;
  width: 100%;
`;

const Navbar = styled.div`
  margin-top: 20px;
`;
const Title = styled.div``;

const About = styled.div`
  min-height: 100vh;
  background-color: #111111;

  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 352px;
`;

const Education = styled.div`
  min-height: 100vh;
  background-color: #111111;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 352px;
`;
const Portfolio = styled.div`
  min-height: 100vh;
  background-color: #111111;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 352px;
`;
const Contact = styled.div`
  min-height: 100vh;
  background-color: #111111;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 352px;
`;
export {
  Container,
  LeftSide,
  RightSide,
  Wrapper,
  Title,
  Navbar,
  About,
  Education,
  Portfolio,
  Contact,
};
