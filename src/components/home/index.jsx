import React from "react";
import {
  About,
  Contact,
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
import myImg from "../assets/img/myimg.png";
import houzing from "../assets/img/houzing2.jpg";
import asilMedia from "../assets/img/asilmedi.jpg";
import edu from "../assets/img/edu.jpg";
import product from "../assets/img/products.jpg";
import movies from "../assets/img/movies.jpeg";

export const Home = () => {
  return (
    <Container>
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
                <a href="#educations">Education</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Navbar>
        </LeftSide>
        <RightSide className="rightSide" id="home">
          <Title className="title">
            <h3>HI THERE !</h3>
            <h1>
              I'M <span className="var_color">Asilbek Boysoatov</span>
            </h1>
            <p>I'm Frontend developer. I am studied at Webbrain Academy</p>
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
      <About className="about" id="myinfo">
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
      <Education className="education" id="educations">
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
      <Portfolio id="portfolio" className="portfolio">
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
              <img src={asilMedia} alt="Asil Social" />
            </a>
          </div>
          <div className="box_1">
            <a href="#edu">
              <img src={edu} alt="Education" />
            </a>
          </div>
          <div className="box_1">
            <a href="#about">
              <img src={product} alt="Product" />
            </a>
          </div>
          <div className="box_1">
            <a href="#contact">
              <img src={movies} alt="Movies" />
            </a>
          </div>
          <div className="box_1">
            <a href="#portfolio">
              <img src={product} alt="Product" />
            </a>
          </div>
        </div>
      </Portfolio>
      <Contact id="contact" className="contact">
        <div className="heading">
          <h1>
            <span className="var_color">Contact</span> Me
          </h1>
        </div>
        <div className="contact_section">
          <div className="leftContactSide">
            <h1>Contact Info</h1>
            <i className="fas fa-envelope" aria-hidden="true">
              <span> Boysoatov003@gmail.com</span>
            </i>
            <i className="fa fa-phone">
              <span> +99 891 582 71 71</span>
            </i>
            <i className="fa fa-phone">
              <span> +99 891 582 71 71</span>
            </i>
            <i className="fa fa-map-marker" aria-hidden="true">
              {" "}
              <span> Uzbekistan, Tashkent Chilonzor</span>
            </i>
          </div>

          <div className="rifghtContactSide">
            <div className="contact_message_section">
              <input type="text" name="Name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="Project" placeholder="Project" />
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>

              <button className="sendbtn" type="submit" value="Submit">
                Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </Contact>
      <Outlet />
    </Container>
  );
};

export default Home;
