import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div class="navbar justify-content-center">
            <span class="navbar-brand footer-font text-color">Copyright &copy;2020 | Ahmed Sheikh</span>
            <span >
                <a class="fab fa-github fa-lg icon-color pr-3" href="https://github.com/ASheikh-io" target="_blank"></a>
                <a class="fab fa-linkedin fa-lg icon-color pr-3" href="https://www.linkedin.com/in/ahmed-sheikh-04240"
                    target="_blank"></a>
                <a class="fas fa-envelope fa-lg icon-color" href="mailto:ahsheikh.a@gmail.com" target="_blank"></a>
            </span>
        </div>
    )
}

export default Footer;