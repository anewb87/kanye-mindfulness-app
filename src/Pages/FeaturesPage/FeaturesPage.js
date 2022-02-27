import React from 'react'
import { Link } from 'react-router-dom';
import moodBear from '../../Assets/Bears/mood-bear.jpg';
import backMoodBear from '../../Assets/Bears/bw-mood.jpg';
import journalBear from '../../Assets/Bears/journal-bear.jpg';
import backJournalBear from '../../Assets/Bears/bw-journal.jpg';
import Delay from '../../Components/Delay'
import './FeaturesPage.scss';

const FeaturesPage = () => {
    const linkStyle = {
        width: '350px'
    }
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'} style={linkStyle} className='slide-up feature-link' data-testid='single-feature-tile'>
                    <div className='flip-container'>
                        <div className='flipper'>
                            <div className='front'>
                                <img className='bear-image' src={moodBear} alt='Mood Bear icon link to vibe check in page.'/>
                            </div>
                            <div className='back'>
                                <img className='bear-image' src={backMoodBear} alt='Other side of mood bear icon link to vibe check in page. ' />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/journal'} style={linkStyle} className='slide-down feature-link' data-testid='single-feature-tile'>
                    <div className='flip-container'>
                        <div className='flipper'>
                            <div className='front'>
                                <img className='bear-image' src={journalBear} alt='Journal bear link to journal page' />
                            </div>
                            <div className='back'>
                                <img className='bear-image' src={backJournalBear} alt='Other side of journal bear icon link to journal page.' />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            <section className='dashboard-btn-section'>
                <Delay>
                    <Link to='/dashboard' data-testid='dashboard-link' className='dashboard-link fade-in-fwd'>
                    Dashboard
                    </Link>
                </Delay>
            </section>
        </section>
    );
};

export default FeaturesPage;
