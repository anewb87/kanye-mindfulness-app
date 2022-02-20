import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/mood">Vibe Check</NavLink>
        </>
    )
}

export default Nav;