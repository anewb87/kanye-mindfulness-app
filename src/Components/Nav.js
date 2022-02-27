import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
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
                    <button className='burger-button' onClick={toggleClick} type="button">
                        <img className='burger-icon'alt='hamburger menu button' src={menuIcon} />
                    </button>
                    <div className="menu">{clicked && <HamburgerMenu/>}</div>
                    <h1 className='welcome'>Welcome, {user}!</h1>
                </section>
                <span className='bear-logo bear-focus'>
                    <NavLink to='/features'>
                        <img className='bear-face rotate-center' alt='bear head wearing glasses' src={kanyebearface} />
                    </NavLink>
                </span>
            </nav>

        </>
    )
}

export default Nav;

