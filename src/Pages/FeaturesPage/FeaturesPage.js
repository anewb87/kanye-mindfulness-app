import React from 'react'
import { Link } from 'react-router-dom';
import moodBear from '../../Assets/Bears/mood-bear.jpg';
import backMoodBear from '../../Assets/Bears/bw-mood.jpg';
import journalBear from '../../Assets/Bears/journal-bear.jpg';
import journalBear2 from '../../Assets/Bears/journal-bear2.jpg'
import backJournalBear from '../../Assets/Bears/bw-journal.jpg';
import './FeaturesPage.scss';

const FeaturesPage = () => {
    const linkStyle = {
        width: '350px',
    }
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'} style={linkStyle}>
                    <div className='flip-container' >
                        <div className='flipper'>
                            <div className='front'>
                                <img className='bear-image' src={moodBear} alt='mood bear feature icon to take to mood checkin page'/>
                            </div>
                            <div className='back'>
                                <img className='bear-image' src={backMoodBear} alt='black and white feature icon to take to mood checkin page' />
                                <p>write it out</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/journal'} style={linkStyle}>
                    <div className='flip-container'>
                        <div className='flipper'>
                            <div className='front'>
                                <img className='bear-image' src={journalBear2} alt='journal bear feature icon to take to mood checkin page' />
                            </div>
                            <div className='back'>
                                <img className='bear-image' src={backJournalBear} alt='black and white feature icon to take to mood checkin page' />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/journal'} style={linkStyle}>
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
