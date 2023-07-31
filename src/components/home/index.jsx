import React from "react";
import { Container, LeftSide, MyImg, RightSide, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import myImg from "../assets/img/home1.png";
export const Home = () => {
  return (
    <Container>
      <Outlet />
      <Wrapper>
        <LeftSide className="leftSide">
          <div className="leftparentdiv">
            <div className="myImg">
              <MyImg src={myImg} />
              <h1>test</h1>
            </div>
          </div>
        </LeftSide>
        <RightSide className="rightSide">right</RightSide>
      </Wrapper>
    </Container>
  );
};
export default Home;
