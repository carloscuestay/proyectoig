import { useState } from "react"
import Fruta from "./components/Fruta"
import GranTotal from "./components/GranTotal"
import 'bootstrap/dist/css/bootstrap.min.css'
import Figure from 'react-bootstrap/Figure'

//Este es arreglo simula los datos que vendran como objeto de respuesta del Back 
const frutas = [
  {
    id: 123,
    name: 'Manzana',
    price: 1000
  },
  {
    id: 321,
    name: 'Fresa',
    price: 700
  },
  {
    id: 231,
    name: 'Mango',
    price: 200
  }
]

//Este la funcion proncipal que renderiza escrita de forma funcional 
const App = () => {
  const [total, setTotal] = useState(0)
  const procesar = (params) => {
      setTotal(total + params.valor * (params.suma ? 1 : -1))
  }
  return (
      <div className="container">
          <h1>TIENDA FRUVIRTUAL.COM</h1>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="src/frutas.png"
      />
      <Figure.Caption>
        La compras virtual pero la disfrutas en tiempo real...
      </Figure.Caption>
    </Figure>
            {frutas.map((fruta) => {
              return (
                  <Fruta
                      key={fruta.id}
                      name={fruta.name}
                      price={fruta.price}
                      bus={procesar}
                  />
              );
          })}
          <td>
          <GranTotal total={total} />
          </td>
      </div>
  )
}

//Aqui se Exporta la funcion principal para poder comunicarse (ser escuchada) con los hijos (componentes)
export default App