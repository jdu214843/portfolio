import React from "react";
import { Container, LeftSide, RightSide } from "./style";

export const Home = () => {
  return (
    <Container>
      <LeftSide className="leftSide">
        <div className="leftparentdiv">
          <div className="myImg">
            <img src={require("../assets/img/myimg.png").default} alt="myImg" />
          </div>
        </div>
      </LeftSide>
      <RightSide className="rightSide">right</RightSide>
    </Container>
  );
};
export default Home;
