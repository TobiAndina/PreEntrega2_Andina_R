import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, descripcion, nombre, precio, img, stock }) => {

  //1) Creamos un estado con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //2)Creamos una función manejadora de la cantidad: 
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos Agregados:" + cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <h3>ID: {id} </h3>
      <p> {descripcion}</p>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica de montaje y desmontaje de componentes: 
      }
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail