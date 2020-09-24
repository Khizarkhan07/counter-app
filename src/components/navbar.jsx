import React from 'react';

function Navbar({totalCounter}) {

    return (
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand" >Navbar
            <span className="badge badge-pill badge-secondary m-2">{totalCounter}</span>
            </p>

        </nav>
    );

}

export default Navbar;