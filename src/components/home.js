import { React , useState} from 'react';
import { Link } from 'react-router-dom';
import MapController from '../mapcontroller';

const Home = () => {
    const [chosen,setChosen] = useState( "Cajaquistan")
    const mapController = (value) => {
      setChosen(value)
    }


    return (
        <div>
        <h1 className='title'>Bienvenido al Registro Nacional de Avaluadores</h1>
        <div class="container">
            <div class="row">
                <div class="col-4"> <Link to="/Directorio">Ingresar a Directorio</Link>
                        <p>{chosen}</p>
                 </div>
                <div class="col-8"><MapController callback={mapController}/></div>
            </div>
        </div>
        
       
        </div>

    )
}

export default Home