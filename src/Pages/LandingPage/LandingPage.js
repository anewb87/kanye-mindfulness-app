import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { QuoteContext } from '../../Contexts/QuoteContext';
import { getQuote } from '../../apiCall'
import './LandingPage.scss';

const LandingPage = () => {

    const { quote } = useContext(QuoteContext)

    return (
        <section className='landing-page'>
            <h1>{quote}</h1>
            {console.log(quote)}
            <Link to={'/features'}>
                <button className='landing-button'>Get Mindfulness Through the Wire</button>
            </Link>
        </section>

    )
}


export default LandingPage;