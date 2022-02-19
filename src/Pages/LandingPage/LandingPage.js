import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuote } from '../../apiCall'
import './LandingPage.scss';

const LandingPage = () => {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        getQuote()
        .then(data => setQuote(data.quote))
    }, [])

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