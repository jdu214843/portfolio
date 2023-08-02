import React from "react";
import { Container, LeftSide, Navbar, RightSide, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import myImg from "../assets/img/myImg.png";
export const Home = () => {
  return (
    <Container>
      <Outlet />
      <Wrapper>
        <LeftSide className="leftSide">
          <div className="Myabout">
            <img src={myImg} className="MyImg" />
            <h1 className="Myname">Asilbek Boysoatov</h1>
            <h5 className="MySkil">Frontend Developer</h5>
          </div>
          <Navbar className="navbar">
            <ul className="navbar_list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Navbar>
        </LeftSide>
        <RightSide className="rightSide">
          <div className="title">
            <h3>HI THERE !</h3>
            <h1>
              I'M <span>Asilbek Boysoatov</span>
            </h1>
            <p>I'm Frontend developer. I am studyed Webbrain Academy</p>
          </div>
          <div className="cv_btn">
            <button>Download CV</button>
            <button>About Me</button>
          </div>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Home;
