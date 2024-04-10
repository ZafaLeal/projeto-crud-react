import Home from "./pages/home";
import Login from "./pages/login";
import Produtos from "./pages/produtos"
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Router(){
    return (
        <BrowserRouter>
            {/* aqui poderia ter por exemplo um menu personalizado...  */}
            <Menu/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
};