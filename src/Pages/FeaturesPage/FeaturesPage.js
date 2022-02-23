import React from 'react'
import { Link } from 'react-router-dom';
import './FeaturesPage.scss'

const FeaturesPage = () => {
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'}>
                    <article className='single-feat-tile' data-testid='single-feature-tile'>
                        <p className='feature-title'>Mood</p>
                    </article>
                </Link>
                <Link to={'/journal'}>
                    <article className='single-feat-tile' id='featureTitle' data-testid='single-feature-tile'>
                        <p className='feature-title'>Journal</p>
                    </article>
                </Link>
                <article className='single-feat-tile' data-testid='single-feature-tile'>
                     <p className='feature-title'>Meditation</p>
                </article>
                <article className='single-feat-tile' data-testid='single-feature-tile'>
                    <p className='feature-title'>Sleep Tracker</p>
                </article>
            </section>
            <section className='dashboard-btn-section'>
                <Link to='/dashboard' data-testid='dashboard-link'>
                  Dashboard
                </Link>
            </section>
        </section>
    );
};

export default FeaturesPage;
