import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { QuoteContext } from '../../Contexts/QuoteContext';
import './LandingPage.scss';
import Delayed from '../../Components/Delay';

const LandingPage = () => {

    const { quote } = useContext(QuoteContext);


    return (
        <section className='landing-page'>
            <article className='open-quote fade-in-fwd'>
                <h1>{quote}</h1>
            </article>
            <Delayed>
                <Link to={'/features'}>
                    <button className='landing-button fade-in-fwd'>THROUGH THE WIRE</button>
                </Link>
            </Delayed>   
        </section>

    );
};


export default LandingPage;