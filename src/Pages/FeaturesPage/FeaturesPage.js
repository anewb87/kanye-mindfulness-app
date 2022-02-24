import React from 'react'
import { Link } from 'react-router-dom';
import moodBear from '../../Assets/Bears/mood-bear.jpg';
import moodHoverBear from '../../Assets/Bears/bw-mood.jpg';
import journalBear from '../../Assets/Bears/journal-bear.jpg';
import './FeaturesPage.scss';

const FeaturesPage = () => {
    return (
        <section className='feature-page'>
            <section className='feature-tiles'>
                <Link to={'/mood'}>
                    <article className='single-feat-tile-1' data-testid='single-feature-tile'>
                        <img className='bear-image' src={moodBear} alt='mood bear feature icon to take to mood checkin page'/>
                        {/* <div className='overlay'>
                            <div className='content'>
                                <p className='feature-title'>MOOD</p>
                                <img className='bear-hover' src={moodHoverBear} alt='black and white hover mood bear'/>
                            </div>
                        </div> */}
                    </article>
                </Link>
                <Link to={'/journal'}>
                    <article className='single-feat-tile-2' id='featureTitle' data-testid='single-feature-tile'>
                        <img className='bear-image' src={journalBear} alt='journal bear feature icon to take to mood checkin page' />
                        {/* <p className='feature-title'>Journal</p> */}
                    </article>
                </Link>
                {/* <article className='single-feat-tile' data-testid='single-feature-tile'>
                     <p className='feature-title'>Meditation</p>
                </article>
                <article className='single-feat-tile' data-testid='single-feature-tile'>
                    <p className='feature-title'>Sleep Tracker</p>
                </article> */}
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
