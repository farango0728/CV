import React from "react";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutAvatarImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #005b95;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const Abouth2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #40c1f2;
`;

const AboutProfession = styled.p`
  margin: 0.2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 600;
  color: #005b95;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 500;
`;

const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #757575;
`;

const About = () => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <AboutAvatarImg />
      </AboutAvatar>
      <AboutName>
        <Abouth2>Fabio Andres Arango Grajales</Abouth2>
      </AboutName>
      <AboutProfession>FULL STACK</AboutProfession>
      <AboutBio>Ingeniero de sistemas</AboutBio>
      <AboutLocation>Cali, Colombia</AboutLocation>
    </div>
  </AboutStyle>
);

export default About;
