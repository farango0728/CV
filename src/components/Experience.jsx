import React from "react";
import H2Element from "../styled/H2Element";
import H3Element from "../styled/H3Element";
import ParamElement from "../styled/ParamElement";

const Experience = (props) => (
  <div className="Experience">
    <H2Element name="Experiencia" />
    <div className="item" key="1">
      <H3Element>
        Backend @ Ingenieria Latina - Cali
        <span> 2007 - 2010</span>
      </H3Element>
      <ParamElement content="Desarrollo de aplicacion para el control de vehiculos" />
    </div>
    <div className="item" key="2">
      <H3Element>
        Backend - Frontend @ Softcom - Argentina
        <span>2011 - 2013</span>
      </H3Element>
      <ParamElement content="Desarrollo de aplicaciones, mantenimiento a aplicaciones desarrolladas." />
    </div>

    <div className="item" key="3">
      <H3Element>
        Backend - Frontend @ Proimpo sas - Colombia
        <span>2014 - 2020</span>
      </H3Element>
      <ParamElement content="Desarrollo de plataformas." />
    </div>
  </div>
);

export default Experience;
