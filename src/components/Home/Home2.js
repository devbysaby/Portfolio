import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,  
} from "react-icons/ai";
import { SiTelegram } from 'react-icons/si';
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for blockchain development and have been exploring it ever since. 🚀
              <br />
              <br />
              I'm fluent in crafting solutions using 
              <i>
                <b className="purple"> Solidity, Node.js, and JavaScript</b>
              </i>
              , with a knack for creating
              <i>
                <b className="purple"> decentralized applications and backend systems</b>
              </i>.
              <br />
              <br />
              My expertise spans building 
              <i>
                <b className="purple"> cutting-edge blockchain technologies, smart contract development, auditing smart contracts, and creating innovative products</b>
              </i> 
              in the Web3 space.
              <br />
              <br />
              Whenever possible, I channel my enthusiasm into developing 
              <i>
                <b className="purple"> scalable blockchain solutions, conducting research, and managing DevOps workflows</b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devbysaby"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sabir-aboobaker"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:devbysaby@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/sabiraboobaker"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
