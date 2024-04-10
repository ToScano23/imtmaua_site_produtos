import CadastrarProduto from "./components/CadastrarProduto";
import ConsultaCatalogo from "./components/ConsultaCatalogo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import Menu from "./components/Menu";
function App() {
  return (
    <div>
      {/* Ajusta o marginLeft para coincidir com a largura da barra lateral */}
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <BrowserRouter>
          <div className="App" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
        <Header />
        <Menu />
        <Routes>
          {/*//http://localhost:3000 */}
          <Route path="/" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/produtos*/}
          <Route path="/produtos" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/cad-produto*/}
          <Route path="/cad-produto" element={<CadastrarProduto />}></Route>
          {/*//http://localhost:3000/edit-produto/:id*/}
          <Route path="/edit-produto/:id" element={<CadastrarProduto />}></Route>
          {/*//http://localhost:3000/upload*/}
          <Route path="/upload" element={<ImageUpload />}></Route>
        </Routes>
        <Footer />
        </div>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
