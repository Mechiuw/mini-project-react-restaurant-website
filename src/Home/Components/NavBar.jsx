// eslint-disable-next-line no-unused-vars
import React from 'react';

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top">
        <div className="container-fluid ms-4">
            <a className="navbar-brand text-white fs-3" href="#">
                <i><b>Enigma </b>Market</i>
            </a>
            <button className="navbar-toggler btn btn-transparent text-white" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto column-gap-4 fs-5">
                    <li className="nav-item">
                        <a className="nav-link text-white" aria-current="page" href="home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" aria-current="page" href="home">Tentang Kami</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" aria-current="page" href="home">Testimoni</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" aria-current="page" href="home">Kontak Kami</a>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
)
}

export default NavBar;