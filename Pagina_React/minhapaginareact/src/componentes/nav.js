import React from "react";
import {NavLink} from "react-router-dom";

import img1 from "../img/emo.gif"

function Nav() {
    return (
        <nav>
            <div>
            <NavLink id="sub" to="/">Inicio</NavLink>
            <NavLink id="sub" to="/sobre">Sobre Mim</NavLink>
            <NavLink id="sub" to="/projeto">Outros projetos</NavLink>
            </div>
            <img src={img1} alt="" />
        </nav>
    );
};

export default Nav;