import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.scss'

const HamburgerMenu = () => {

    return(
        <section className='hamburger-menu'>
            <Link to='/mood' className='dropdown-items' data-testid='dropdown-items'>Vibe Check</Link>
            <Link to='/journal' className='dropdown-items' data-testid='dropdown-items'>Journal</Link>
        </section>
    )
}

export default HamburgerMenu