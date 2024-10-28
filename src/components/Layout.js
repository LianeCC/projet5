import React from "react";
import { NavLink } from "react-router-dom";
import './Layout.scss';
import logo from "../images/logo-kasa.png";
import logoWhite from "../images/logo-kasa-white.png";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <div className="header-content">
                    <img src={logo} alt="Logo" />
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">Accueil</NavLink></li>
                            <li><NavLink to="../pages/Apropos" activeClassName="active">À propos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
            <footer>
                <img src ={logoWhite} alt="Logo en blanc" />
                <p>© 2020 Kasa. All right reserved</p>
            </footer>
        </div>
    );
};

export default Layout;