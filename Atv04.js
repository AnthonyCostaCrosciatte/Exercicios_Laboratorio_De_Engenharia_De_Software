import Toolbar from './funcaoToolbar';
import Gallery from './Gallery';
import Counter from './CounterAtv04';
import { Link } from 'react-router-dom';

export default function Ativ04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <Toolbar />
            <br />
            <Gallery />
            <br />
            <Counter />
            <br />
            <Link to="/">Retornar para a página Inicial</Link>
        </>
    )
}