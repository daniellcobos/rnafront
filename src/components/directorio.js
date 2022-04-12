import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const Directorio = (props) =>{
    const ConReg = ["CALDAS","QUINDIO","BOGOTA Y CUNDINAMARCA","BOLIVAR","ATLANTICO",
"LLANOS ORIENTALES","ANTIOQUIA","HUILA","VALLE DEL CAUCA","SANTANDER",
"RISARALDA","META","TOLIMA","CORDOBA","SUCRE","NORTE DE SANTANDER",
"BOYACA","CESAR","SAN ANDRES, PROVIDENCIA Y SANTA CATALINA","MAGDALENA","CAUCA","CAQUETA",
"CHOCO","CASANARE","NARIÑO",,"PUTUMAYO","BOGOTA","MEXICO","ARAUCA","GUAINIA","CHILE","REPUBLICA DOMINICANA","ECUADOR",
"PERU","COSTA RICA","PANAMA","MÉXICO","VENEZUELA","BOLIVIA","ARGENTINA","CNA"]


const [directorio,setDirectorio] = useState([])
const [mainData,setMainData] = useState([])
    useEffect(() => {
    fetch('http://localhost:8000/excel/directorio')
  .then(response => response.json())
  .then((data) => { 
    setDirectorio(data)
    setMainData(data)
  } )
 }, []);




 function handleChangeRegion(event) {
    const CatSelect = document.getElementById("cats")
        const NewD = mainData.filter(
            (row) => {return row.RNA.ConReg === event.target.value && row.Categoria === CatSelect.value}
        )

        setDirectorio(NewD)
    }

function handleChangeCat(event) {
    const ConregSelect = document.getElementById("crs")
        const NewD = mainData.filter(
            (row) => {return row.Categoria === event.target.value && row.RNA.ConReg === ConregSelect.value }
        )

        setDirectorio(NewD)
    }




 return(
     <div>
        <div className='container mb-1'>
        <label htmlFor="catas">Filtrar por Categoria:</label>
        <select  className="form-control" id="cats" onChange={handleChangeCat}>
             <option value="URB">Urbano</option>
             <option value="RUR">Rural</option>
             <option value="MYE">Maquinaria y Equipo</option>
             <option value="ESP">Especiales</option>
        </select>
        <label htmlFor="crs">Filtrar por Region:</label>
        <select  className="form-control" id="crs" onChange={handleChangeRegion}>
            {ConReg.map(
                (row) => {return(<option   value={row}>{row}</option>)}
            )} 
        </select>
        </div>
         
         <div>
             <table className="table table-striped table-bordered">
                 <thead className="thead-dark">
                     <tr scope="row">
                         <th scope="col">Nombre</th>
                         <th scope="col">Ciudad</th>
                         <th scope="col">Region</th>
                         <th scope="col">Codigo</th>
                         <th scope="col">Otorgamiento</th>
                         <th scope="col">Vencimiento</th>
                         <th scope="col">Renovacion</th>
                         <th scope="col">Vencimiento renovacion (si aplica)</th>
                         <th scope="col">Telefono</th>
                     </tr>
                 </thead>
                 <tbody>
                 {directorio.map(
            (row) => {
                
                return(<tr key= {row.Codigo} scope="row">

                    <td><Link to={"avaluador/" + row.RNA.RNA}>{row.RNA.Nombre} {row.RNA.Apellidos}</Link></td>
                    <td>{row.RNA.Ciudad}</td>
                    <td>{row.RNA.ConReg}</td>
                    <td>{ row.Codigo}</td>
                    <td>{row.Otorgamiento}</td>
                    <td>{row.PrimerVencimiento}</td>
                    <td>{row.Renovacion}</td>
                    <td>{row.Vencimiento}</td>
                    <td>{row.RNA.Celular}</td>
                
                    </tr>)
            }
            )}
                 </tbody>
            
             </table>
   
     </div>
     </div>
     
   
  
 )
}

export default Directorio