import React from "react";
import {
  About,
  Container,
  LeftSide,
  Navbar,
  RightSide,
  Title,
  Wrapper,
} from "./style";
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
          <Title className="title">
            <h3>HI THERE !</h3>
            <h1>
              I'M <span className="var_color">Asilbek Boysoatov</span>
            </h1>
            <p>I'm Frontend developer. I am studyed Webbrain Academy</p>
            <div className="cv_btn">
              <button className="button">Download CV</button>
              <button className="button">About Me</button>
            </div>
          </Title>
        </RightSide>
      </Wrapper>
      <About className="about">
        <div className="aboutme">
          <h1 className="var_color">About Me</h1>
          <hr className="line" />
        </div>
        <div className="myintrodaction">
          <div className="info">
            <h3>
              Name: <span className="var_color">Asilbek Boysoatov</span>
            </h3>
            <h3>
              Age: <span className="var_color">20</span>
            </h3>
            <h3>
              Qualification: <span className="var_color">BMS</span>
            </h3>
            <h3>
              Post: <span className="var_color">FontEnd Developer</span>
            </h3>
            <h3>
              Language: <span className="var_color">Uzbek</span>
            </h3>
            <button className="button">Download CV</button>
          </div>
          <div className="my_experience">
            <div className="box">
              <span>1</span>
              <h3>Years of Experience</h3>
            </div>
            <div className="box">
              {" "}
              <span>10+</span>
              <h3>Project Completed</h3>
            </div>
            <div className="box">
              {" "}
              <span>Courses</span>
              <h3>Happy Completed</h3>
            </div>
            <div className="box">
              {" "}
              <span>10+</span>
              <h3>Awards Won</h3>
            </div>
          </div>
        </div>
      </About>
    </Container>
  );
};

export default Home;
