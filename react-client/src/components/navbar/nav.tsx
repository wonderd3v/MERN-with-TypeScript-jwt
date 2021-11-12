import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = (props: { user: {},  }) => {

    const [handleMenu, setHandleMenu] = useState(true);

    const logOut = () => {
        //@ts-ignore 
        localStorage.removeItem('token');
        setHandleMenu(false);
    }

    let userMenu;

    //@ts-ignore
    if (handleMenu === false) {

        userMenu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="login" className="nav-link active" >Log in</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link active" >Register </Link>
                </li>

            </ul>
        )
    } else {
        //@ts-ignore
        if (props.user.role === 1) {
            userMenu = (
                <ul className="navbar-nav me-auto mb-2 mb-md-0">

                    <li className="nav-item">
                        <Link to="courses-admin" className="nav-link active" >Admin courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active" >Log out </Link>
                    </li>

                </ul>

            )
        } else {
            userMenu = (
                <ul className="navbar-nav me-auto mb-2 mb-md-0">

                    <li className="nav-item">
                        <Link to="/login" className="nav-link active" onClick={logOut}> Log out</Link>
                    </li>
                </ul>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand" >Home</Link>

                <div>
                    {userMenu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
