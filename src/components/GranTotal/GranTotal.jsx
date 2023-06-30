import React from "react";
import style from "bootstrap";
import { Container } from "react-bootstrap";

//Este es el componente funcional
const GranTotal = (props) => {
  return (
  <>      
      <h1 class="display-4" >
        Total a Pagar: ${props.total}
      </h1>
  </>
  )
};

//Aqui exporto el componente para poder ser usado por App.jsx

export default GranTotal