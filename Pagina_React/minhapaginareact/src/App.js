import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/estilos.css"

import Nav from "./componentes/nav";
import Aside from "./componentes/aside";
import Footer from "./componentes/footer";

import Home from "./pagina/Home";
import Sobre from "./pagina/Sobre";
import Projeto from "./pagina/Projetos";

function App() {

    return (

        <BrowserRouter>

            <div id="container">

                <Nav />

                <Aside />

                <Footer />

                <Routes>

                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/sobre" element={<Sobre/>}/>
                    <Route exact path="/projeto" element={<Projeto/>}>
                        
                    </Route>
                </Routes>

            </div>

        </BrowserRouter>

    );

};

export default App;