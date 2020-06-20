import React from "react";
import H2Element from "../styled/H2Element";
import H3Element from "../styled/H3Element";
import ParamElement from "../styled/ParamElement";

const Education = (props) => (
  <div className="Education">
    <H2Element name="Educación" />

    <div className="Education-item" key="1">
      <H3Element>
        Fundacion Universitaria San Martin
        <span> 2006</span>
      </H3Element>
      <ParamElement content="Titulo Ingeniero de Sistemas " />
    </div>
    <div className="Education-item" key="2">
      <H3Element>
        Platzi
        <span> 2015 - 2020</span>
      </H3Element>
      <ParamElement content="Actualización continua " />
    </div>
  </div>
);

export default Education;
