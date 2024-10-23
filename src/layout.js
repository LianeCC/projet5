import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <h1>appli KASA</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>KASA</p>
                <p>© 2020 Kasa. All right reserved</p>
            </footer>
        </div>
    );
};

export default Layout;