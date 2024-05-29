import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

export default function Atv01() {
    return (
        <>
          <h1> Atividade 01</h1>
          <Relogio />
          <Letreiro />

          <br />
          <Link to="/">Retornar a página inicial </Link>
        
        </>
    );
}