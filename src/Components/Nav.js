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

    const linkStyle = {
        // width: '350px',
        // backgroundImage: 'url(kanyebearface)',
        // display: 'block',
        // height: '32px',
        // width: '32px'

    }

    return (
        <>
            <nav className='nav-container'>
                <section className='nav-section'>
                    <button className='burger-button' onClick={toggleClick}>
                        <img className='burger-icon'src={menuIcon} />
                    </button>
                    <div className="menu">{clicked && <HamburgerMenu/>}</div>
                    <h2 className='welcome'>Welcome, {user}!</h2>
                </section>
                <span className='bear-logo'>
                    <NavLink to='/features'>
                        <img className='bear-face' alt='bear head wearing glasses' src={kanyebearface} />
                    </NavLink>
                </span>
            </nav>

        </>
    )
}

export default Nav;
