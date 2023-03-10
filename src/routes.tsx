// Importação de Bibliotecas do Uso do Router
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";

export default function AppRouter() {
    return (
        <Router>
            {/* Routes Switch de Troca de Rotas  */}
            <Routes>
                {/* Path de Rotas de Pages*/}
                <Route path="/" element={<Home />}/>
                <Route path="/login" />
            </Routes>
        </Router>
    );
}