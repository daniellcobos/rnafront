import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react'; 


const Avaluador = (props) => {
    const [avaluador,setAvaluador] = useState({Certificacion:[]})
    let { id } = useParams();
    useEffect(() => {
    fetch(`http://localhost:8000/excel/avaluador/api/${id}`)
  .then(response => response.json())
  .then((data) => { 
    setAvaluador(data)
  } )
 }, []);










 return(
     <div className="container">
     <div className="card">
          <div className ="card-body">
              <h6 className="card-title">{avaluador.RNA}</h6>
        <h6 className="card-subtitle">{avaluador.Nombre+ " "+ avaluador.Apellidos}</h6>
        <p className="card-text">Celular: {avaluador.Celular}</p>
        <p className="card-text">Telefono: {avaluador.Telefono}</p>
        <p className="card-text">{avaluador.Ciudad}</p >
        </div>
        </div>
        <div className="certlist">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Categoria</th>
                        <th>Codigo</th>
                        <th>Fecha de Otorgamiento</th>
                    </tr>
                </thead>
                <tbody>
                {avaluador.Certificacion.map(
            (cert) => {
                return(
                    <tr className="cert" key={cert.Codigo}>
                        <td>{cert.id}</td>
                        <td>{cert.Categoria}</td>
                        <td>{cert.Codigo}</td>
                        <td>{cert.Otorgamiento}</td>
                    </tr>
                 
                )
            }
        )}
                </tbody>
            </table>
        </div>
        
        </div>
 )
}

export default Avaluador