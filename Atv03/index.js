import React from 'react';
import Galeria from "./GalleryAtv03";
import TodoList from "./ListaCompleta";
import { Link } from 'react-router-dom';
import Profile2 from "./segundoperfil";
import PackingList from "./ListaPactada";
import App from "./AppdaAtv03";
import TeaSet from "./CoffeeSet";

export default function Atividade03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Galeria />
            <TodoList />
            <Profile2 />
            <PackingList />
            <App />
            <TeaSet />
            <br />
            <Link to="/">Retornar à página inicial</Link>
        </>
    );
}
