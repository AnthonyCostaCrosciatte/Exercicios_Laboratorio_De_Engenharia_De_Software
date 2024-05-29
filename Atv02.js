import { Link } from 'react-router-dom';
import ContadorGenero from './ContadorGenero';


export default function Atv02() {
    return (
        <>
          <h1> Atividade 02</h1>
          <ContadorGenero />
          <br />
          <Link to="/">Retornar a página inicial </Link>
        
        </>
    );
}