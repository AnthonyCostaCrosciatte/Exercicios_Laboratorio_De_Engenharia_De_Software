import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";
import Atividade03 from "./Atv03"; 
import Ativ04 from "./Atv04";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
                <Route path="/atv03" element={<Atividade03 />} /> 
                <Route path="/atv04" element={<Ativ04 />} /> 
            </Routes>
        </BrowserRouter>
    );
}
