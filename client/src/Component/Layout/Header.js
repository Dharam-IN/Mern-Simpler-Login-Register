import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-md">
                    <NavLink className="navbar-brand w-100 text-center text-white" to={"/"}>
                        Logo
                    </NavLink>
                </div>
            </nav>

        </>
    )
}

export default Header;