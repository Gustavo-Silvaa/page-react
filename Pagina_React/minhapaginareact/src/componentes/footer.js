import React from "react";

import Linkedin from "../img/linkedin.png";
import Insta from "../img/instagram.png";


function Footer() {
    return(
        <footer>
            <a href="https://www.linkedin.com/in/gustavo-silva-858213173/" target="_blank"><img src={Linkedin}/></a>
            <a href="https://www.instagram.com/gustavosillvaa24/?hl=pt-br" target="_blank"><img src={Insta}/></a>

        </footer>
    );
};

export default Footer;