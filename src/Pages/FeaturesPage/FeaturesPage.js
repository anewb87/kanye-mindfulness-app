import React from 'react'
import { Link } from 'react-router-dom';
import moodBear from '../../Assets/Bears/mood-bear.jpg';
import moodHoverBear from '../../Assets/Bears/bw-mood.jpg';
import journalBear from '../../Assets/Bears/journal-bear.jpg';
import './FeaturesPage.scss';

const FeaturesPage = () => {
    const linkStyle = {
        width: '350px',
    }
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'} style={linkStyle}>
                        <img className='bear-image' src={moodBear} alt='mood bear feature icon to take to mood checkin page'/>
                </Link>
                <Link to={'/journal'} style={linkStyle}>
                    <img className='bear-image' src={journalBear} alt='journal bear feature icon to take to mood checkin page' />
                </Link>
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
