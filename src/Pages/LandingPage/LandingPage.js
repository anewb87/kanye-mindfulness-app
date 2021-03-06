import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuoteContext } from '../../Contexts/QuoteContext';
import './LandingPage.scss';
import Delayed from '../../Components/Delay';

const LandingPage = () => {

    const { quote, error } = useContext(QuoteContext);

    return (
        <>
            {error
                ? <h1 className='title' >Mayday Mayday server down. Refresh.</h1>
                : <section className='landing-page' data-testid='landing-page'>
                    <h1 className='title'>GETTING MINDFUL WITH KANYE</h1>
                     <Delayed>
                        <Link to={'/features'}>
                            <button className='landing-button fade-in-fwd' data-testid='landing-button'>ENTER THROUGH THE WIRE</button>
                        </Link>
                    </Delayed>
                    <article className='open-quote fade-in-fwd'>
                        <h2 className='quote-size'>"{quote}"</h2>
                    </article>
                </section>}
        </>
    );
};


export default LandingPage;
