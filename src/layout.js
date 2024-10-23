import React from "react";
import {Link} from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <nav>
                    <Link to ="/"> Accueil </Link>
                    <Link to ="/apropos">A propos</Link>
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