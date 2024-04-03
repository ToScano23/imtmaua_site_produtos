import CadastrarProduto from "./components/CadastrarProduto";
import ConsultaCatalogo from "./components/ConsultaCatalogo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*//http://localhost:3000 */}
          <Route path="/" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/produtos*/}
          <Route path="/produtos" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/cad-produto*/}
          <Route path="/cad-produto" element={<CadastrarProduto />}></Route>
          {/*//http://localhost:3000/edit-produto/:id*/}
          <Route path="/edit-produto/:id" element={<CadastrarProduto />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
