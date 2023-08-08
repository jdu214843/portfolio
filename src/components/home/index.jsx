import React from "react";
import {
  About,
  Container,
  Education,
  LeftSide,
  Navbar,
  Portfolio,
  RightSide,
  Title,
  Wrapper,
} from "./style";
import { Outlet } from "react-router-dom";
import myImg from "../assets/img/myImg.png";
import houzing from "../assets/img/houzing2.jpg";
import asilMedia from "../assets/img/asilmedi.jpg";
import edu from "../assets/img/edu.jpg";
import product from "../assets/img/products.jpg";

import movies from "../assets/img/movies.jpeg";
export const Home = () => {
  return (
    <Container>
      <Outlet />
      <Wrapper>
        <LeftSide className="leftSide">
          <div className="Myabout">
            <img src={myImg} className="MyImg" alt="My Img" />
            <h1 className="Myname">Asilbek Boysoatov</h1>
            <h5 className="MySkil">Frontend Developer</h5>
          </div>
          <Navbar className="navbar">
            <ul className="navbar_list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#myinfo">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
              <button className="button">
                <a href="#cv">Download CV </a>
                <i className="fa fa-download" aria-hidden="true"></i>
              </button>
              <button className="button" id="myinfo">
                <a href="#myinfo">About Me</a>{" "}
                <i className="fa fa-user" aria-hidden="true"></i>
              </button>
            </div>
          </Title>
        </RightSide>
      </Wrapper>
      <About className="about">
        <div className="heading">
          <h1>
            <span className="var_color">About</span> Me
          </h1>
        </div>
        <div className="myintrodaction">
          <div className="info" id="myinfo">
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
            <button className="button3">
              <a href="#cv">Download CV </a>
              <i className="fa fa-download" aria-hidden="true"></i>
            </button>
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
      <Education className="education">
        <div className="my_education">
          <div className="heading">
            <h1>
              My <span className="var_color">Education</span>
            </h1>
          </div>

          <div className="boxparent">
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span>2020</span>
              <h3>Termiz IT Center</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Quibusdam Maiores Eum Debitis Tempora Ducimus Numquam, Sunt
                Quidem Sequi. Nesciunt Tenetur Corrupti Quaerat. Dolores, Quia
                Sequi.
              </p>
            </div>
          </div>
        </div>
      </Education>
      <Portfolio>
        <div className="heading">
          <h1>
            My <span className="var_color">Portfolio</span>
          </h1>
        </div>
        <div className="portfolio_box">
          <div className="box_1">
            <a href="https://houzingshop.netlify.app">
              <img src={houzing} alt="Houzing" />
            </a>
          </div>
          <div className="box_1">
            <a href="https://asil-social.netlify.app">
              <img src={asilMedia} alt="" />
            </a>
          </div>
          <div className="box_1">
            <a href="#home">
              <img src={edu} alt="edu" />
            </a>
          </div>
          <div className="box_1">
            <a href="#about">
              <img src={product} alt="watch" />
            </a>
          </div>
          <div className="box_1">
            <a href="#contact">
              <img src={movies} alt="movies" />
            </a>
          </div>
          <div className="box_1">
            <a href="#home">
              <img src={product} alt="product" />
            </a>
          </div>
        </div>
      </Portfolio>

      <div className="heading">
        <h1>
          My <span className="var_color">Portfolio</span>
        </h1>
      </div>
    </Container>
  );
};

export default Home;
