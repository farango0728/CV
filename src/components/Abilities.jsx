import React from "react";
import H2Element from "../styled/H2Element";
import H3Element from "../styled/H3Element";
import ParamElement from "../styled/ParamElement";

const Abilities = (props) => (
  <div className="Experience">
    <H2Element name="Experiencia con Tecnologias" />
    <div className="item" key="1">
      <H3Element>HTML, CSS y JS</H3Element>
      <ParamElement content="10 Años" />
    </div>
    <div className="item" key="2">
      <H3Element>React, Router, Redux y Next</H3Element>
      <ParamElement content="5 Años" />
    </div>
    <div className="item" key="3">
      <H3Element>Node js, Express y Mongo</H3Element>
      <ParamElement content=" 2 Años" />
    </div>
    <div className="item" key="4">
      <H3Element>PHP y MySql</H3Element>
      <ParamElement content=" 10 años" />
    </div>
    <div className="item" key="5">
      <H3Element>MERN (Mongo, Express, React, Node js)</H3Element>
      <ParamElement content="1 Año" />
    </div>
    <div className="item" key="6">
      <H3Element>GraphQl</H3Element>
      <ParamElement content="1 Año" />
    </div>
    <div className="item" key="7">
      <H3Element>Api RESTFULL - PHP</H3Element>
      <ParamElement content="6 Años" />
    </div>
    <div className="item" key="8">
      <H3Element>Api Node js</H3Element>
      <ParamElement content="1 Año" />
    </div>
    <div className="item" key="9">
      <H3Element>GIT</H3Element>
      <ParamElement content="3 Años" />
    </div>
  </div>
);

export default Abilities;
