import React from "react";
import {Link} from "react-router-dom";
import './styles/layout.scss';
import logo from "./images/logo-kasa.png"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <img src={logo} alt="Logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/apropos">À propos</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>K(ajoutimage)SA</p>
                <p>© 2020 Kasa. All right reserved</p>
            </footer>
        </div>
    );
};

export default Layout;