import React from "react";
import { Container, LeftSide, MyImg, RightSide, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import myImg from "../assets/img/myImg.png";
export const Home = () => {
  return (
    <Container>
      <Outlet />
      <Wrapper>
        <LeftSide className="leftSide">
          <img src={myImg} className="MyImg" />
        </LeftSide>
        <RightSide className="rightSide">right</RightSide>
      </Wrapper>
    </Container>
  );
};

export default Home;
