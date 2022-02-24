import React from 'react'
import { Link } from 'react-router-dom';
import moodBear from '../../Assets/Bears/mood-bear.jpg';
import journalBear from '../../Assets/Bears/journal-bear.jpg';
import './FeaturesPage.scss'

const FeaturesPage = () => {
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'}>
                    <article className='single-feat-tile' data-testid='single-feature-tile'>
                        <img className='bear-image slide-right' src={moodBear} alt='mood bear feature icon to take to mood checkin page'/>
                        {/* <p className='feature-title'>Mood</p> */}
                    </article>
                </Link>
                <Link to={'/journal'}>
                    <article className='single-feat-tile' id='featureTitle' data-testid='single-feature-tile'>
                        <img className='bear-image' src={journalBear} alt='journal bear feature icon to take to mood checkin page' />
                        {/* <p className='feature-title'>Journal</p> */}
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
