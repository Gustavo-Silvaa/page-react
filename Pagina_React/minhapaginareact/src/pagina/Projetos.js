import React, { useDebugValue } from "react";

import Diabete from "../img/siteD.png"
import Login from "../img/siteL.png"
import Cadastro from "../img/siteC.png"

function Projeto() {
    return (
        <main>
            <div id="diabete">
                <h2>Site de informações para Diabeticos</h2> <br />
                <a href="https://gustavo-silvaa.github.io/Site-em-Html-Css/" target="blank"><img src={Diabete} /></a> <br /> <br />

                <p>Projeto feito totalmente em Html e Css, com intuito de passar informações e ajudar pessoas com Diabetes.</p>

            </div>

            <div id="login">
                <h2>Site de Login e cadastro</h2> <br/>

                <a href="https://gustavo-silvaa.github.io/Pagina-login-e-cadastro/index.html" target="blank"><img src={Login} /></a> 
                <br />
                <br />

                <p>Tela de login com sistema de ocultação ou visualização de senha</p> <br /> <br />

                <a href="https://gustavo-silvaa.github.io/Pagina-login-e-cadastro/cadastro.html" target="blank"><img src={Cadastro} /></a> 
                <br />
                <br />

                <p>Tela de Cadastro com sistema de ocultação ou visualização de senha, e sistema de Api de endereços.</p> <br /> <br />
                
            </div>
        </main>
    );
};

export default Projeto;