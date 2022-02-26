import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { QuoteContext } from '../../Contexts/QuoteContext';
import './LandingPage.scss';
import Delayed from '../../Components/Delay';
import ErrorPage from '../ErrorPage/ErrorPage';

const LandingPage = () => {

    const { quote, error } = useContext(QuoteContext);


    const determineDisplay = () => {
        if (error) {
            return (
                <>
                    <ErrorPage />
                </>
            )
        }
        else {
            return (
                <section className='landing-page' data-testid='landing-page'>
                    <h1 className='title'>GETTING MINDFUL WITH KANYE</h1>
                    <Delayed>
                        <Link to={'/features'}>
                            <button className='landing-button fade-in-fwd' data-testid='landing-button'>ENTER THROUGH THE WIRE</button>
                    </Link>
                    </Delayed>
                    <article className='open-quote fade-in-fwd'>
                        <h3>"{quote}"</h3>
                    </article>
                </section>
            )
        }
    }

    return (
        <>
            {determineDisplay()}
        </>
    );
};


export default LandingPage;
