import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <section className='landing-page'>
            <Link to={'/features'}>
                <button className='landing-button'>Get Mindfulness Through the Wire</button>
            </Link>
        </section>

    )
}

export default LandingPage;