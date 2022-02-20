import React from 'react'
import { Link } from 'react-router-dom';
import './FeaturesPage.scss'

const FeaturesPage = () => {
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'}>
                    <article className='single-feat-tile'>Mood</article>
                </Link>
                <Link to={'/journal'}>
                    <article className='single-feat-tile'>Journal</article>
                </Link>
                <article className='single-feat-tile'>Meditation</article>
                <article className='single-feat-tile'>Sleep Tracker</article>
            </section>
            <section className='dashboard-btn-section'>
                <Link to='/dashboard'>
                    <button>Dashboard</button>
                </Link>
            </section>
        </section>
    );
};

export default FeaturesPage;