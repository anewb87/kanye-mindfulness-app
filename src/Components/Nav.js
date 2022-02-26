import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import kanyebearface from "../Assets/Bears/kanyebearface.png";
import { UserContext } from "../Contexts/UserContext";
import HamburgerMenu from "./HamburgerMenu";
import menuIcon from "../Assets/menuIcon.png"
import './Nav.scss'


const Nav = () => {

    const { user } = useContext(UserContext);

    const [ clicked, setClicked ] = useState(false)

    const toggleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <nav className='nav-container'>
                <section className='nav-section'>
                    <button className='burger-button' onClick={toggleClick}>
                        <img className='burger-icon'src={menuIcon} />
                    </button>
                    <h2 className='welcome'>Welcome, {user}!</h2>
                </section>
                    <Link to='/features' className='bear-logo'>
                        <img className='bear-face' alt='bear head wearing glasses' src={kanyebearface} />
                    </Link>
            </nav>
            {clicked && <HamburgerMenu/>}
        </>
    )
}

export default Nav;