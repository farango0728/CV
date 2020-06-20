import React from "react";
import styled, { keyframes } from "styled-components";
import H2Element from "../styled/H2Element";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsH5 = styled.h5`
  margin: 0.5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #00aced;
`;

const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
  display: block;
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 8px;
  background-color: #005b95;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;
  }
`;

const Skills = (props) => (
  <div className="Skills">
    <H2Element name="Skills" />
    <SkillsContainer>
      <div className="Skills-item" key="1">
        <SkillsH5>HTML</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="100%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="2">
        <SkillsH5>JAVASCRIPT</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="100%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="3">
        <SkillsH5>CSS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="80%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="4">
        <SkillsH5>SASS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="60%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="5">
        <SkillsH5>STYLED COMPONENT</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="80%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="6">
        <SkillsH5>REACT</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="7">
        <SkillsH5>NEXT JS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="8">
        <SkillsH5>PHP</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="9">
        <SkillsH5>MYSQL</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="10">
        <SkillsH5>NODE JS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="70%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="11">
        <SkillsH5>EXPRESS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="60%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="12">
        <SkillsH5>MONGO DB</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="80%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="13">
        <SkillsH5>REACT NATIVE</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="50%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="14">
        <SkillsH5>API RESTFULL</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="15">
        <SkillsH5>GRAPHQL</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="50%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="15">
        <SkillsH5>REDUX</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="80%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="15">
        <SkillsH5>REACT ROUTER</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="80%" />
        </SkillsLine>
      </div>
      <div className="Skills-item" key="15">
        <SkillsH5>HOOKS</SkillsH5>
        <SkillsLine>
          <SkillsSpan width="90%" />
        </SkillsLine>
      </div>
    </SkillsContainer>
  </div>
);

export default Skills;
