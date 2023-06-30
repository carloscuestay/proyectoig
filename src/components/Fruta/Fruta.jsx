import { useState } from "react";
import { Button } from "react-bootstrap";


//Componente Funcional 

const Fruta = (props) => {
  const [cantidad, setCantidad] = useState(0);
  const agregar = () => {
      setCantidad(cantidad + 1);
      props.bus({
          valor: props.price,
          suma: true,
      });
  };
  const quitar = () => {
      setCantidad(cantidad - 1);
      props.bus({
          valor: props.price,
          suma: false,
      });
  };
  return (
      <body>        
      <link rel="stylesheet" href="fruta.module.css" />
      
        <div>
              
            <h3>{props.name}</h3>
            <p>Valor: ${props.price}</p>
              <Button variant="outline-success" size="sm" onClick={agregar}>+</Button>
              <Button variant="outline-danger" size="sm" onClick={quitar}>-</Button>
            <p>Cantidad (unidades): {cantidad}</p>
            <h3> Subtotal: $ {props.price * cantidad}</h3>
            <hr />
          
        </div>
      
      </body>
  );
};

//Aqui Exporto el componente para que pueda ser usado por App.jsx
export default Fruta