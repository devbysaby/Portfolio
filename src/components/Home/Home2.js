import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const PurpleText = ({ children }) => (
    <i>
      <b className="purple">{children}</b>
    </i>
  );
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <PurpleText>Blockchain Developer</PurpleText> with over{" "}
              <PurpleText>six years of experience</PurpleText> building secure,
              scalable, and user-focused Web3 solutions.
              <br />
              <br />
              My journey spans <PurpleText>DeFi platforms</PurpleText>,{" "}
              <PurpleText>cross-chain bridges</PurpleText>,{" "}
              <PurpleText>crypto wallets</PurpleText>, and{" "}
              <PurpleText>NFT applications</PurpleText>, developed across
              networks like <PurpleText>Ethereum</PurpleText>,{" "}
              <PurpleText>Tron</PurpleText>, <PurpleText>Solana</PurpleText>,
              and <PurpleText>Bitcoin</PurpleText>.
              <br />
              <br />
              I enjoy turning complex ideas into practical products — from
              designing smart contracts to building backend services that power
              real-world blockchain applications.
              <br />
              <br />
              Over the years, I’ve also contributed to{" "}
              <PurpleText>smart contract audits</PurpleText>, guided teams on
              architecture decisions, and helped streamline project workflows
              with basic <PurpleText>DevOps practices</PurpleText> to keep
              things smooth and reliable.
              <br />
              <br />
              Whenever possible, I bring my energy into crafting solutions that
              are thoughtful, efficient, and built to last.
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
